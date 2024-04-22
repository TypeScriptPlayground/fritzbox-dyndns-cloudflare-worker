import { DNSRecord } from '../record/dns_record.ts';

/**
 * This interface represents all URL parameters from the request.
 */
export interface URLParameters {
  /** Token to access the API. */
  token : string,
  /** Zone ID to get records from. */
  zoneId : string
  records : DNSRecord[]
}
