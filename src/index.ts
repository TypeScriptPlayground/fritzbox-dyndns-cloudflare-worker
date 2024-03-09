import buildUrlWithFilter from './url/build_url_with_filter.ts';
import { ListDNSRecordsResponse } from './response/list_dns_records_response.ts';
import { parseUrlParameters } from './url/parse_url_parameters.ts';
import { endpoints } from './api/endpoints.ts';
import getAllDnsRecords from './record/get_all_dns_records.ts';



export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const urlParameters = parseUrlParameters(new URL(request.url).searchParams);
    const {
      token,
      zoneId,
      records
    } = urlParameters;
  
    const authorizationHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    getAllDnsRecords(
      `${endpoints.BASE}zones/${zoneId}/dns_records/`,
      authorizationHeader
    ).then((response) => {
      response
    })

    records.forEach(({type, name}) => {
      
    })
  }
}
