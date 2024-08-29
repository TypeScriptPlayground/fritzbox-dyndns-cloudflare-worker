import responseBuilder from './response_builder.ts';

export default function InvalidParameterType(
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
