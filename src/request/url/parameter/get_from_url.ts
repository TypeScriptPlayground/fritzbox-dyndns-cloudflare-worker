import MissingURLParameterKeyError from '../error/missing_url_parameter_key_error.ts';
import MissingURLParameterValueError from '../error/missing_url_parameter_value_error.ts';

export default function getFromUrl(
  urlSearch : string,
  key : string
) : string[] {
  const urlParams = new URLSearchParams(urlSearch);

  if (!urlParams.has(key)) {
    throw new MissingURLParameterKeyError(key);
  }

  const value = urlParams.getAll(key);
  if (value.length === 0) {
    throw new MissingURLParameterValueError(key);
  }

  return value;
}
