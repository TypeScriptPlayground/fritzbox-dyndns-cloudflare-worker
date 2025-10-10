import { responseBuilder } from './response_builder.ts';

export function invalidParameterType(
  parameter : string,
  type : string
) : Response {
  return responseBuilder(
    false,
    {
      parameter,
      type
    },
    [{
      type: 'InvalidParameterType',
      message: 'The provided parameter type is invalid.'
    }]
  )
}
