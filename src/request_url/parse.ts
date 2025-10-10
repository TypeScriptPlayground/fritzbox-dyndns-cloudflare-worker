import type {DnsRecord} from '../record/dns_record.ts';
import {getFromUrl} from './parameter/get_from_url.ts';
import type {UrlObject} from './parameter/url_object.ts';


/**
 * This function parses the URL parameters and returns an object containing the parsed data.
 * 
 * @param url The URL to parse
 * @returns An object containing the parsed data.
 */
export function parse(url : string) : UrlObject {
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
