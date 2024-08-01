import MissingURLParameterKeyError from '../error/missing_url_parameter_key_error.ts';
import MissingURLParameterValueError from '../error/missing_url_parameter_value_error.ts';

/**
 * This function gets the token from the url and returns it as a string. If the token does not exist
 * in the URL a `MissingURLParameterKeyError` gets thrown. If the value of the token is an empty
 * string a `MissingURLParameterValueError` gets thrown.
 * 
 * @param url The request URL
 * @throws MissingURLParameterKeyError If key is not defined in the URL
 * @throws MissingURLParameterValueError If value is an empty string
 * @returns The token
 */
export default function getToken(url : URL) : string {
  const key = 'token'
  const token = url.searchParams.get(key);

  if (token === null) {
    throw new MissingURLParameterKeyError(key)
  }

  if (token === '') {
    throw new MissingURLParameterValueError(key)
  }
  
  return token
}
