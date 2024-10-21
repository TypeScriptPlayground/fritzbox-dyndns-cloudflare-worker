import createDnsRecord from './api/create_dns_record.ts';
import listDnsRecords from './api/list_dns_records.ts';
import {parseRequestURL} from './request/url/mod.ts'

export default {
  /**
   * [Cloudflare Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * 
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const requestUrl = new URL(request.url)
    const {token, zoneId, records} = parseRequestURL(requestUrl)
    
    const existingRecords = await listDnsRecords({token, zoneId})

    existingRecords.forEach((record) => {
      
    })
    records.forEach((record) => {
      createDnsRecord(record, {token, zoneId})
    })
  }
}
