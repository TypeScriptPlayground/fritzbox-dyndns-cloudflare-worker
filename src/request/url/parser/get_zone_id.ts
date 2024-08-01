import MissingURLParameterKeyError from '../error/missing_url_parameter_key_error.ts';
import MissingURLParameterValueError from '../error/missing_url_parameter_value_error.ts';

/**
 * This function gets the zone id from the url and returns it as a string. If the zone id does not
 * exist in the URL a `MissingURLParameterKeyError` gets thrown. If the value of the zone id is an
 * empty string a `MissingURLParameterValueError` gets thrown.
 * 
 * @param url The request URL
 * @throws MissingURLParameterKeyError If key is not defined in the URL
 * @throws MissingURLParameterValueError If value is an empty string
 * @returns The zone id
 */
export default function getZoneId(url : URL) : string {
  const key = 'zoneId'
  const zoneId = url.searchParams.get(key);

  if (zoneId === null) {
    throw new MissingURLParameterKeyError(key)
  }

  if (zoneId === '') {
    throw new MissingURLParameterValueError(key)
  }
  
  return zoneId
}
