import { FirebaseError } from 'firebase/app';

export const onError = (err: unknown) => ({
  code: err instanceof FirebaseError ? err.code : 'unknown',
});
