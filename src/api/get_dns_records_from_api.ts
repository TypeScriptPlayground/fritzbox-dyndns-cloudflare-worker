import ApiRequestError from '../error/api_request_error.ts';
import FetchRequestError from '../error/fetch_request_error.ts';
import { DNSRecord } from '../record/dns_record.ts';
import supportedDnsRecordTypes from '../record/dns_record_type.ts';
import { GetDnsRecordsFromApiOption } from './get_dns_records_from_api_option.ts';

/**
 * This function gets all DNS records, filtered by the DNS record types.
 * 
 * @param options Options for the API fetch
 * @returns List of all DNS records found.
 */
export default function getDnsRecordsFromApi(options: GetDnsRecordsFromApiOption) : Promise<DNSRecord[]> {
  return fetch(
    `${options.apiEndpoint}zones/${options.zoneId}/dns_records?type=${supportedDnsRecordTypes.join(',')}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${options.token}`
      }
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new FetchRequestError({cause: response.statusText});
    })
    .then((responseJson) => {
      if (responseJson.success) {
        return responseJson.result
      }
      throw new ApiRequestError({cause: responseJson.errors})
    });
}
