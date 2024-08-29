/**
 * This interface represents options for the API fetch.
 */
export interface ListDnsRecordsOption {
  /** API URL endpoint. */
  apiEndpoint : string,
  /** Token to access the API. */
  token : string,
  /** Zone ID to get records from. */
  zoneId : string
}
