import InvalidUrlParametersError from '../error/invalid_url_parameters_error.ts';
import { DNSRecord } from '../record/dns_record.ts'
export default function getDnsRecordsFromUrlParameters(url : URLSearchParams) : DNSRecord[] {
  try {
    return url.getAll('record').map((record) => JSON.parse(record));
  } catch (error) {
    if (error instanceof SyntaxError) {
      return [];
    }
    throw new InvalidUrlParametersError(error);
  }
}
