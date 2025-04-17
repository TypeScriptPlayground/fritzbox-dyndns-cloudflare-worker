import requestUrl from './request_url/index.ts';
import api from './api/index.ts';

export default {
  /**
   * [Cloudflare Reference](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/)
   * 
   * @param request Incoming http request
   */
  async fetch(request : Request) : Promise<void> {
    const {
      token,
      zoneId,
      records: requestedRecords
    } = requestUrl.parse(request.url);
    
    const existingRecords = await api.listDnsRecords({token, zoneId})

    requestedRecords.forEach((requestedRecord) => {
      existingRecords.filter(
        (existingRecord) => existingRecord.name === requestedRecord.name
      ).forEach((selectedRecord) => api.updateDnsRecord(
        selectedRecord.id,
        requestedRecord,
        {token, zoneId}
      ))

      api.createDnsRecord(requestedRecord, {token, zoneId})
    })
  }
}
