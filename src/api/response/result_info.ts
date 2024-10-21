// deno-lint-ignore-file camelcase

/**
 * This interface represents the information about the result.
 */
export interface ResultInfo {
  /** Total number of results for the requested service */
  count : number,
  /** Current page within paginated list of results */
  page : number,
  /** Number of results per page of results */
  per_page : number,
  /** Total results available without any search parameters */
  total_count : number
}
