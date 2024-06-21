/**
 * This function generates the body part with indentation.
 */
export default function bodyPart(
  content : string,
  indentation : number = 2
): string {
  return `${' '.repeat(indentation)}${content}\n`
}
