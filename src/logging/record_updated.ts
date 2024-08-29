import { DnsRecord } from '../record/dns_record.ts';
import timestamp from './generator/timestamp.ts';

export default function recordUpdated(record : DnsRecord) : void {
  console.group(`[${timestamp()}] Record Updated`)
  console.info(`Type: \t${record.type}`)
  console.info(`Content: \t${record.content}`)
  console.info(`Name: \t${record.name}`)
  record.proxied !== undefined && console.info(`Proxied: \t${record.proxied ? 'yes' : 'no'}`)
  record.comment !== undefined && console.info(`Comment: \t"${record.comment}"`)
  record.ttl !== undefined && console.info(`TTL: \t${record.ttl === 0 ? 'auto' : record.ttl}`)
  console.groupEnd()
}

recordUpdated({type: 'A', content: '1.1.1.1', name: 'example.com'})
