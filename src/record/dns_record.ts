import { DNSRecordType } from './dns_record_type.ts';

/**
 * This interface represents a record.
 */
export interface DNSRecord {
  /** Record type. */
  type : DNSRecordType,
  /** 
   * `A` - A valid IPv4 address.\
   * `AAAA` - A valid IPv6 address.\
   * `CNAME` - A valid hostname. Must not match the record's name.
   */
  content : string,
  /** DNS record name (or `@` for the zone apex) in Punycode. */
  name : string,
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied : boolean,
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment : string,
  /** 
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and
   * 86400, with the minimum reduced to 30 for Enterprise zones.
   */
  ttl : number
}
