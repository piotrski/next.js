/* __next_internal_action_entry_do_not_use__ {"ac840dcaf5e8197cb02b7f3a43c119b7a770b272":"bar"} */ import { registerServerReference } from "private-next-rsc-server-reference";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
'use strict';
export function bar() {}
import { ensureServerEntryExports } from "private-next-rsc-action-validate";
ensureServerEntryExports([
    bar
]);
registerServerReference(bar, "ac840dcaf5e8197cb02b7f3a43c119b7a770b272", null);
