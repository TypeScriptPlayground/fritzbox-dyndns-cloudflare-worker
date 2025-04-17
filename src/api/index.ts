import createDnsRecord from './create_dns_record.ts';
import listDnsRecords from './list_dns_records.ts'
import updateDnsRecord from './update_dns_record.ts'

const api = {
  createDnsRecord,
  listDnsRecords,
  updateDnsRecord
}

export {
  createDnsRecord,
  listDnsRecords,
  updateDnsRecord
}

export default api;
