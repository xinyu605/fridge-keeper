export type MutationResult<T> =
  | { code: string; result?: never }
  | { code?: never; result: T };
