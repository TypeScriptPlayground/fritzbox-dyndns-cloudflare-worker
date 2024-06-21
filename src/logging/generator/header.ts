import timestamp from './timestamp.ts';

export default function header(title : string) : string {
  return `[${timestamp()}] ${title}:\n`
}
