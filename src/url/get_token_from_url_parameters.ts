import MissingURLParameterError from '../error/missing_url_parameter_error.ts';

/**
 * This function gets the token from the url and checks if it is not null. If the value is null, a 
 * MissingURLParameterError is thrown.
 * 
 * @param url The request URL
 * @returns The token.
 */
export default function getTokenFromUrlParameters(url : URLSearchParams) : string {
  const token = url.get('token');
  
  if (token !== null) {
    return token;
  }

  throw new MissingURLParameterError({cause: 'No "token" was supplied.'})
}
