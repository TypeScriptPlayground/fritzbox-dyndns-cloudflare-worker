import { parseUrlParameters } from './url/parse_url_parameters.ts';

const apiEndpoint = "https://api.cloudflare.com/client/v4/";

export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const urlParameters = parseUrlParameters(new URL(request.url).searchParams)


  }
}
