import getDnsRecordsFromApi from './api/get_dns_records_from_api.ts';
import InvalidUrlParametersError from './error/invalid_url_parameters_error.ts';
import getDnsRecordsFromUrlParameters from './url/get_dns_records_from_url_parameters.ts';

export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const urlParameters = new URL(request.url).searchParams;

    const token = urlParameters.get('token');
    const zoneId = urlParameters.get('zoneId');

    if (token === null) {
      throw new InvalidUrlParametersError({cause: 'No "token" was supplied.'})
    }

    if (zoneId === null) {
      throw new InvalidUrlParametersError({cause: 'No "zoneId" was supplied.'})
    }

    const requestRecords = getDnsRecordsFromUrlParameters(urlParameters);
    const currentRecords = getDnsRecordsFromApi({
      apiEndpoint: 'https://api.cloudflare.com/client/v4/',
      token,
      zoneId
    })


  }
}
