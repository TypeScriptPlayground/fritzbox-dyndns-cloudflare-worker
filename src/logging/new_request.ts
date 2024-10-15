import bodyPart from './generator/body_part.ts';
import footer from './generator/footer.ts';
import header from './generator/header.ts';

export default function newRequest(requestHeader : Headers) : string {
  
  return header('New Request') + bodyPart('Type: ') + footer()
}
