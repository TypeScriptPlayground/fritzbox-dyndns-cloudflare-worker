// deno-lint-ignore-file camelcase
import type { Errors } from '../errors.ts';
import type { Messages } from '../messages.ts';
import type { ResultInfo } from '../result_info.ts';
import type * as records from './records/index.ts'


/**
 * This interface represents the response of a DNS record that got created.
 */
export interface CreateNdsRecordResponse {
  result : (
    | records.ARecord
    | records.AAAARecord
    | records.CNAMERecord
  )[],
  errors : Errors[],
  messages : Messages[],
  success : boolean,
  result_info? : ResultInfo
}
