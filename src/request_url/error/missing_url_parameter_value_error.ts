import CustomError from '../../error/custom_error.ts'

/**
 * This class represents a missing URL parameters error. This error is thrown if there is a missing URL parameter.
 */
export default class MissingURLParameterValueError extends CustomError {
  parameter : string;
  /**
   * @param parameter The missing parameter
   */
  constructor(parameter : string) {
    super(
      `Uncaught MissingURLParameterValueError: Missing value for parameter "${parameter}"`,
    );

    this.parameter = parameter
  }
}
