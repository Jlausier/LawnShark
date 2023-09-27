import { useQuery } from "@apollo/client";

import { QUERY_COMPANIES_FILTERED } from "../utils/queries";

export default function useCompaniesSearch(variables) {
  const { data, loading } = useQuery(QUERY_COMPANIES_FILTERED, {
    variables,
  });
  return { data, loading };
}
