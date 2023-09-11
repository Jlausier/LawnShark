import { gql } from "@apollo/client";

export const QUERY_SERVICE = gql`
  query service($serviceId: ID!) {
    service(serviceId: $serviceId) {
      _id
      name
    }
  }

  query services {
    services {
      _id
      name
    }
  }
`;
