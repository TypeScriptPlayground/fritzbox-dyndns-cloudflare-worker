import { DnsRecord } from './dns_record.ts';

export interface DnsRecordList extends DnsRecord {
  
  /** Id of the record */
  id : string;
}
