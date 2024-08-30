import ApiRequestError from '../error/api_request_error.ts';
import FetchRequestError from '../error/fetch_request_error.ts';
import { DnsRecord } from '../record/dns_record.ts';
import { ApiRequestOptions } from './api_request_options.ts';

export default function createDnsRecord(
  record : DnsRecord,
  options : ApiRequestOptions
) : void {
  fetch(
    `${options.apiEndpoint}zones/${options.zoneId}/dns_records`,
    {
      method: 'POST',
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
      throw new FetchRequestError({cause: response.statusText});
    })
    .then((responseJson) => {
      if (!responseJson.success) {
        throw new ApiRequestError({cause: responseJson.errors})
      }
    });
}
