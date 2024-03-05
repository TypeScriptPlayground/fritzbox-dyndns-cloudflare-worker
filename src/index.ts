import { ListDNSRecordsResponse } from './response/list_dns_records_response.ts';
import { parseUrlParameters } from './url/parse_url_parameters.ts';

const apiEndpoint = "https://api.cloudflare.com/client/v4/";

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
  
    const dnsRecordsUrl = `${apiEndpoint}zones/${zoneId}/dns_records`;
    const authorizationHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }

    records.forEach(({type, name}) => {
      fetch(`${dnsRecordsUrl}/?type=${type}&name=${name}`).then(response => response.json()).then((response : ListDNSRecordsResponse) => {
        
      })
    })
  }
}
