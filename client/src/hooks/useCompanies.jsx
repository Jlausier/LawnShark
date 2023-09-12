import { useQuery } from "@apollo/client";

import { QUERY_COMPANIES_FILTERED } from "../utils/queries";

export function useCompaniesSearch(searchText, services) {
  const [data] = useQuery(QUERY_COMPANIES_FILTERED, {
    variables: {
      searchText,
      services,
    },
  });
  return data;
}
