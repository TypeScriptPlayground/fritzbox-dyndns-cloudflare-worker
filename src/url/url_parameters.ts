import { RecordType } from '../record/record_type.ts';

export interface URLParameters {
  token : string,
  zoneId : string,
  type : RecordType,
  ipv4 : string,
  ipv6 : string,
  
}
