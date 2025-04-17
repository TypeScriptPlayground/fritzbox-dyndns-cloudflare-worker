import { DnsRecord } from '../../record/dns_record.ts';

/**
 * This interface represents the URL parameters from the request.
 */
export interface UrlObject {
  /** Token to access the API. */
  token : string;
  /** Zone ID to get records from. */
  zoneId : string;
  /** List of records to update */
  records : DnsRecord[];
}
