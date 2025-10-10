import * as error from '../error/index.ts';

/**
 * This function extracts a list of values from the URL parameters.
 * 
 * @param urlSearch The search string of the URL
 * @param key The key of the parameter to extract
 * @returns An array of values associated with the given key.
 */
export function getFromUrl(
  urlSearch : string,
  key : string
) : string[] {
  const urlParams = new URLSearchParams(urlSearch);

  if (!urlParams.has(key)) {
    throw new error.MissingURLParameterKeyError(key);
  }

  const value = urlParams.getAll(key);
  if (value.length === 0) {
    throw new error.MissingURLParameterValueError(key);
  }

  return value;
}
