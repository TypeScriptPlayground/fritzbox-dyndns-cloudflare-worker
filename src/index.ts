import getDnsRecordsFromApi from './api/get_dns_records_from_api.ts';
import fillDefaultUrlParameterValues from './url/fill_default_url_parameter_values.ts';

export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * 
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const urlParameters = fillDefaultUrlParameterValues(new URL(request.url).searchParams);

    const requestRecords = urlParameters.records;
    const currentRecords = getDnsRecordsFromApi({
      apiEndpoint: 'https://api.cloudflare.com/client/v4/',
      token: urlParameters.token,
      zoneId: urlParameters.zoneId
    })
  }
}
