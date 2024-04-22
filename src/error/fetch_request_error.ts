import CustomError from './custom_error.ts'

/**
 * This class represents an fetch request error. This error is thrown if there is an error during the fetch request.
 */
export default class FetchRequestError extends CustomError {
  /**
   * @param error The custom error options
   */
  constructor(error : ErrorOptions) {
    super(
      'Uncaught FetchRequestError: Error during fetch request',
      error
    );
  }
}
