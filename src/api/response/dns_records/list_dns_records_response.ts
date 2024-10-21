// deno-lint-ignore-file camelcase
import type { Errors } from '../errors.ts';
import type { Messages } from '../messages.ts';
import type { ResultInfo } from '../result_info.ts';
import type { ARecord } from './records/a_record.ts';
import type { AAAARecord } from './records/aaaa_record.ts';
import type { CNAMERecord } from './records/cname_record.ts';

/**
 * This interface represents the response of a DNS record list.
 */
export interface ListDnsRecordsResponse {
  result : (
    | ARecord
    | AAAARecord
    | CNAMERecord
  )[],
  errors : Errors[],
  messages : Messages[],
  success : boolean,
  result_info? : ResultInfo
}
