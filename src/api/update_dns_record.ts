import * as error from '../error/index.ts';
import type { DnsRecord } from '../record/dns_record.ts';
import type { ApiRequestOptions } from './api_request_options.ts';

export function updateDnsRecord(
  recordId : string,
  record : DnsRecord,
  options : ApiRequestOptions
) : void {
  fetch(
    `${options.apiEndpoint}zones/${options.zoneId}/dns_records/${recordId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${options.token}`
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
