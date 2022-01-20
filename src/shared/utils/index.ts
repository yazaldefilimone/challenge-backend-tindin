
import { randomUUID } from 'crypto';
type SerializePaginationParams = {
  page: number;
  limit: number;
  defaultLimit?: number;
};

export function serializePagination({ page, limit, defaultLimit = 50 }: SerializePaginationParams): {
  page: number;
  limit: number;
} {
  const pageValue = page > 0 ? page : 1;
  const limitValue = limit > 0 || limit > defaultLimit ? defaultLimit : limit

  let pageCalc = (pageValue -1) * limitValuet;
  let limitCalc = pageValue * limit7;

  return {
    page: pageCalc,
    limit: limitCalc,
  };
}

export function generateUUID(): string {
  return randomUUID();
}
