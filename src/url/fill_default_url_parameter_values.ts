import getDnsRecordsFromUrlParameters from './get_dns_records_from_url_parameters.ts';
import getTokenFromUrlParameters from './get_token_from_url_parameters.ts';
import getZoneIdFromUrlParameters from './get_zone_id_from_url_parameters.ts';
import { URLParameters } from './url_parameters.ts';

export default function fillDefaultUrlParameterValues(urlParameters : URLSearchParams) : URLParameters {
  return {
    token: getTokenFromUrlParameters(urlParameters),
    zoneId: getZoneIdFromUrlParameters(urlParameters),
    records: getDnsRecordsFromUrlParameters(urlParameters)
  }
}
