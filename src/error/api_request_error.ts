import CustomError from './custom_error.ts'

/**
 * This class represents an api request error. This error is thrown if there is an error during the api request.
 */
export default class APIRequestError extends CustomError {
  /**
   * @param error The custom error options
   */
  constructor(error : ErrorOptions) {
    super(
      'Uncaught APIRequestError: Error during API request',
      error
    );
  }
}
