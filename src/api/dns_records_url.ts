import { endpoints } from './endpoints.ts';

export default function dnsRecordsUrl(
  zoneId : string, 
  filter? : Record<string, string>[]
) : string {
  const filterString = filter?.map((key_value) => `${Object.keys(key_value)[0]}=${key_value[0]}`)
  return `${endpoints.BASE}zones/${zoneId}/dns_records/?${filterString?.join('&')}`
}
