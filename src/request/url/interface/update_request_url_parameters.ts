import {DnsRecord} from '../../../record/dns_record.ts';

/**
 * This interface represents all URL parameters from the request.
 */
export interface RequestURLParameters {
  /** Token to access the API. */
  token : string,
  /** Zone ID to get records from. */
  zoneId : string
  /** List of records to update */
  records : DnsRecord[]
}
