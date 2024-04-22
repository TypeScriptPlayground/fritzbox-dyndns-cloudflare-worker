import { DNSRecord } from '../record/dns_record.ts';

export interface URLParameters {
  token : string,
  zoneId : string,
  records : DNSRecord[]
}
