import { DnsRecord } from '../../../record/dns_record.ts';

export interface UrlObject {
  token : string;
  zoneId : string;
  records : DnsRecord[];
}
