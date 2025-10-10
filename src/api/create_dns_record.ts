import * as error from '../error/index.ts';
import type { DnsRecord } from '../record/dns_record.ts';
import type { ApiRequestOptions } from './api_request_options.ts';


/**
 * This function creates a DNS record.
 * 
 * @param options Options for the API fetch
 */
export function createDnsRecord(
  record : DnsRecord,
  options : ApiRequestOptions
) : void {
  const {token, zoneId} = options;

  const apiEndpoint = options.apiEndpoint ?? 'https://api.cloudflare.com/client/v4/'

  fetch(
    `${apiEndpoint}zones/${zoneId}/dns_records`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(record)
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new error.FetchRequestError({cause: response.statusText});
    })
    .then((responseJson) => {
      if (!responseJson.success) {
        throw new error.ApiRequestError({cause: responseJson.errors})
      }
    });
}
