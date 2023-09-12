import { useQuery } from "@apollo/client";

import { QUERY_COMPANIES_FILTERED } from "../utils/queries";

export function useCompaniesSearch(variables) {
  const { data } = useQuery(QUERY_COMPANIES_FILTERED, {
    variables,
  });
  return data;
}
