import {DnsRecord} from '../../../record/dns_record.ts';
import MissingURLParameterKeyError from '../error/missing_url_parameter_key_error.ts';
import MissingURLParameterValueError from '../error/missing_url_parameter_value_error.ts';

/**
 * This function gets the records from the url and returns them as a list of records. If no records exist in the URL a
 * `MissingURLParameterKeyError` gets thrown. If the value of the records is an empty array a
 * `MissingURLParameterValueError` gets thrown.
 * 
 * @param url The request URL
 * @throws MissingURLParameterKeyError If key is not defined in the URL
 * @throws MissingURLParameterValueError If value is an empty array
 * @returns The list of records
 */
export default function getRecords(url : URL) : DnsRecord[] {
  const key = 'records'
  const recordsExist = url.searchParams.has(key);
  const records = url.searchParams.getAll(key);
  const recordsList : DnsRecord[] = []

  if (recordsExist) {
    throw new MissingURLParameterKeyError(key)
  }

  if (records.length === 0) {
    throw new MissingURLParameterValueError(key)
  }

  records.forEach((recordValue, recordIndex) => {
    const record = JSON.parse(recordValue) as Partial<DnsRecord>
    
    if (!record.type) {
      throw new MissingURLParameterValueError(`${key}[${recordIndex}].type`)
    }

    if (!record.content) {
      throw new MissingURLParameterValueError(`${key}[${recordIndex}].content`)
    }

    if (!record.name) {
      throw new MissingURLParameterValueError(`${key}[${recordIndex}].name`)
    }

    recordsList.push({
      ...record,
      type: record.type,
      content: record.content,
      name: record.name
    })
  })
  
  return recordsList
}
