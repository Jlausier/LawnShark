import { useQuery } from "@apollo/client";

import { QUERY_POSTINGS_FILTERED } from "../utils/queries";

export function usePostingsSearch(variables) {
  const { data } = useQuery(QUERY_POSTINGS_FILTERED, {
    variables,
  });
  return data;
}