
export default {
  /**
   * [Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const {searchParams} = new URL(request.url)
  }
}
