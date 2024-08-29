export default function responseBuilder(
  success : boolean,
  result : unknown,
  errors : {type : string, message : string}[]
) : Response {
  return new Response(JSON.stringify({
    success,
    result,
    errors
  }))
}
