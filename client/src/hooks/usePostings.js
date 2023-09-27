import { useQuery } from "@apollo/client";

import { QUERY_POSTINGS_FILTERED } from "../utils/queries";

export function usePostingsSearch(variables) {
  const { data, loading } = useQuery(QUERY_POSTINGS_FILTERED, {
    variables,
  });
  return { data, loading };
}
