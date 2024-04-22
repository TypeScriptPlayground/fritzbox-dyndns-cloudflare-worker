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
    
  }
}
