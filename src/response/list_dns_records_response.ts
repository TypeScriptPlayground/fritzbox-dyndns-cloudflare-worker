import { DNSRecord } from '../record/dns_record.ts';

export interface ListDNSRecordsResponse {
  errors : [],
  messages : [],
  result : DNSRecord[],
  success : boolean,
  result_info : {
    count : number,
    page : number,
    per_page : number,
    total_count : number
  }
}
