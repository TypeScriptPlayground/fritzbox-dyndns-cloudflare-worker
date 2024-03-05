import { DNSRecordType } from './dns_record_type.ts';

export interface DNSRecord {
  type : DNSRecordType,
  name : string,
  address : string,
  proxy? : boolean,
  ttl? : number,
  comment? : string
}
