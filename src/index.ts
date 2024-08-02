import {parseRequestURL} from './request/url/mod.ts'

export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * 
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const requestUrl = new URL(request.url)
    const requestUrlParameters = parseRequestURL(requestUrl)
    
  }
}
