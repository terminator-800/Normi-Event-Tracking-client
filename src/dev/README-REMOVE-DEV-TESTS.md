# Dev-only Home test clock (temporary)

Remove when manual testing is done:

1. Delete this entire `src/dev/` folder.
2. In `src/components/Home.tsx`, remove the block between `DEV-TEST-START` and `DEV-TEST-END`.
3. Revert optional `simulatedDate` / `simulatedTapTime` on `useVerifyEventPassword` if no longer needed.

Nothing else in the client depends on this folder.
