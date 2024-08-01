import { UpdateRequestURLParameters } from '../interface/update_request_url_parameters.ts';
import getRecords from './get_records.ts';
import getToken from './get_token.ts';
import getZoneId from './get_zone_id.ts';

/**
 * This function parses the request url.
 * 
 * @param url The request URL
 * @returns The URL parameters
 */
export default function parseUpdateRequestURL(url : URL) : UpdateRequestURLParameters {
  
  return {
    token: getToken(url),
    zoneId: getZoneId(url),
    records: getRecords(url)
  }
}
