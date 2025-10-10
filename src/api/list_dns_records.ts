import * as error from '../error/index.ts';
import type { DnsRecordList } from '../record/dns_record_list.ts';
import * as record from '../record/index.ts';
import type { ApiRequestOptions } from './api_request_options.ts';

/**
 * This function gets all DNS records, filtered by the DNS record types.
 * 
 * @param options Options for the API fetch
 * @returns List of all DNS records found.
 */
export function listDnsRecords(options : ApiRequestOptions) : Promise<DnsRecordList[]> {
  return fetch(
    `${options.apiEndpoint}zones/${options.zoneId}/dns_records?type=${record.dnsRecordTypes.join(',')}`,
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
      throw new error.FetchRequestError({cause: response.statusText});
    })
    .then((responseJson) => {
      if (responseJson.success) {
        return responseJson.result
      }
      throw new error.ApiRequestError({cause: responseJson.errors})
    });
}
