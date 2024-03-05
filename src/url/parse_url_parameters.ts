import { URLParameters } from './url_parameters.ts';
import { DNSRecord } from '../record/dns_record.ts'

export function parseUrlParameters(parameters : URLSearchParams) : URLParameters {
  const token = parameters.get('token');
  const zoneId = parameters.get('zoneId');
  const records = parameters.get('records');

  if (!token) {
    throw new Error('Missing parameter: "token"')
  }
  if (!zoneId) {
    throw new Error('Missing parameter: "zoneId"')
  }
  if (!records) {
    throw new Error('Missing parameter: "records"')
  }

  return {
    token,
    zoneId,
    records: JSON.parse(records) as DNSRecord[]
  }
}
