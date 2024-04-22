import APIRequestError from '../error/api_request_error.ts';
import FetchRequestError from '../error/fetch_request_error.ts';
import { DNSRecord } from '../record/dns_record.ts';
import dnsRecordTypes from '../record/dns_record_type.ts';
import { GetDNSRecordsOption } from './get_dns_records_option.ts';

/**
 * This function gets all DNS records, filtered by the DNS record types.
 * 
 * @param options Options for the API fetch
 * @returns List of all DNS records found.
 */
export default function getDnsRecordsFromApi(options: GetDNSRecordsOption) : Promise<DNSRecord[]> {
  return fetch(
    `${options.apiEndpoint}zones/${options.zoneId}/dns_records?type=${dnsRecordTypes.join(',')}`,
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
      throw new APIRequestError({cause: responseJson.errors})
    });
}
