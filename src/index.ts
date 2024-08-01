import {parseUpdateRequestURL} from './url/mod.ts'

export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * 
   * @param updateRequest Incoming http request
   */
  async fetch(updateRequest : Request) : Promise<void> {
    const updateRequestUrl = new URL(updateRequest.url)
    const updateRequestParameters = parseUpdateRequestURL(updateRequestUrl)
    
  }
}
