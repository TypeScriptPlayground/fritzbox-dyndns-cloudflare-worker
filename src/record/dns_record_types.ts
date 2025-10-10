import type { ValuesFromArray } from '../type/values_from_array.ts';

export const dnsRecordTypes = [
  'A',
  'AAAA',
  'CNAME'
]

/**
 * This type represents all allowed records to use.
 */
export type DnsRecordType = ValuesFromArray<typeof dnsRecordTypes>;
