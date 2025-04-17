import { DnsRecord } from '../../../record/dns_record.ts';
import getFromUrl from './get_from_url.ts';
import { UrlObject } from './url_object.ts';

export default function parse(url : string) : UrlObject {
  const urlSearch = new URL(url).search;

  const token = getFromUrl(urlSearch, 'token')[0];
  const zoneId = getFromUrl(urlSearch, 'zoneId')[0];
  const records : DnsRecord[] = [];
  getFromUrl(urlSearch, 'records').forEach((record) => {
    records.push(JSON.parse(record));
  });
  
  return {
    token,
    zoneId,
    records
  }
}
