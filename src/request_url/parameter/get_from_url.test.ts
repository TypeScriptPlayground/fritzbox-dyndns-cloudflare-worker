/// <reference lib="deno.ns" />
import { assertEquals, assertThrows } from '@std/assert'
import { getFromUrl } from './index.ts';
import {MissingURLParameterKeyError} from '../error/index.ts';

Deno.test('Test getFromUrl', async (test) => {
  await test.step({
    name: 'Test if key gets queried correctly.',
    fn() : void {
      assertEquals(getFromUrl('key=value1&key=value2', 'key'), ['value1', 'value2'])
    }
  })

  await test.step({
    name: 'Test if function throws if the key does not exist.',
    fn() : void {
      assertThrows(() => getFromUrl('key=value1&key=value2', 'keyDoesNotExist'), MissingURLParameterKeyError);
    }
  })
})
