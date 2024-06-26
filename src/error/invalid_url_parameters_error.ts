import CustomError from './custom_error.ts'

/**
 * This class represents an invalid URL parameters error. This error is thrown if there is an error parsing the URL
 * parameters.
 */
export default class InvalidURLParametersError extends CustomError {
  /**
   * @param error The custom error options
   */
  constructor(error : ErrorOptions) {
    super(
      'Uncaught InvalidUrlParametersError: Error while parsing URL parameters',
      error
    );
  }
}
