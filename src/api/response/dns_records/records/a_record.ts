// deno-lint-ignore-file camelcase

/**
 * This interface represents an A record.
 */
export interface ARecord {
  /** When the record comment was last modified. Omitted if there is no comment. */
  comment_modified_on : string,
  /** When the record was created. */
  created_on : string,
  /** Identifier */
  id : string,
  /** Extra Cloudflare-specific information about the record. */
  meta : Record<string, unknown>,
  /** When the record was last modified. */
  modified_on : string,
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable : boolean,
  /** When the record tags were last modified. Omitted if there are no tags. */
  tags_modified_on? : string,
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment : string,
  /** DNS record name (or @ for the zone apex) in Punycode. */
  name : string,
  /* Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied : boolean,
  /** Settings for the DNS record. */
  settings : Record<string, unknown>,
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags : string[],
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl : number,
  /** A valid IPv4 address. */
  content : string,
  /** Record type. */
  type : 'A'
}
