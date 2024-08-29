import { ValuesFromArray } from '../type/values_from_array.ts';

const supportedDnsRecordTypes = [
  'A',
  'AAAA',
  'CNAME'
]

export default supportedDnsRecordTypes;

/**
 * This type represents all allowed records to use.
 */
export type DNSRecordType = ValuesFromArray<typeof supportedDnsRecordTypes>;
