import bodyPart from './generator/body_part.ts';
import footer from './generator/footer.ts';
import header from './generator/header.ts';

export default function newRequest() : void {
  console.log(
    header('New Request') +
    bodyPart('Type: ') +
    bodyPart('Type: ') +
    footer()
  )
}
