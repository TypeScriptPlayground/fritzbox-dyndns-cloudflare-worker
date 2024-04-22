import { ValuesFromArray } from '../type/values_from_array.ts';

const dnsRecordTypes = [
  'A',
  'AAAA',
  'CNAME'
]

export default dnsRecordTypes;

/**
 * This type represents all allowed records to use.
 */
export type DNSRecordType = ValuesFromArray<typeof dnsRecordTypes>;
