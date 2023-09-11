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

  query posting($postingId) {
    posting(postingId: $postingId) {
      _id
      service {
        _id
        name
      }
      askingPrice
      estimatePrice
      bids {
        _id
        amount
        company {
          _id
          name
        }
      }
      customer {
        _id
        name
      }
    }
  }

  query postings {
    postings {
      _id
      service {
        _id
        name
      }
      askingPrice
      customer {
        _id
        name
      }
    }
  }
  
`;
