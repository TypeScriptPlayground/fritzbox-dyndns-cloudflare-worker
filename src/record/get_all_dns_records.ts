import { DNSRecord } from './dns_record.ts';

export default function getAllDnsRecords(
  url : string,
  authorizationHeader : {}
) : Promise<DNSRecord[]> {
  return fetch(
    url,
    {headers: authorizationHeader}
  ).then(response => response.json()) as Promise<DNSRecord[]>
}
