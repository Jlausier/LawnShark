import { gql } from "@apollo/client";

export const QUERY_SERVICE = gql`
  query service($serviceId: ID!) {
    service(serviceId: $serviceId) {
      _id
      name
      description
    }
  }
`;

export const QUERY_SERVICES = gql`
  query services {
    services {
      _id
      name
    }
  }
`;

export const QUERY_POSTING = gql`
  query posting($postingId: ID!) {
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
`;

export const QUERY_POSTINGS = gql`
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

export const QUERY_COMPANY = gql`
  query company($companyId: ID!) {
    company(companyId: $companyId) {
      _id
      name
      description
      services {
        _id
        name
      }
      reviews {
        reviewText
        createdAt
        rating
        customer {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_COMPANIES = gql`
  query companies {
    companies {
      _id
      name
      services {
        _id
        name
      }
      averageRating
    }
  }
`;

export const QUERY_CUSTOMER = gql`
  query customer($customerId: ID!) {
    customer(customerId: $customerId) {
      _id
      name
      location {
        address
        city
        state
        zip
      }
      postings {
        _id
        service {
          _id
          name
        }
        askingPrice
      }
    }
  }
`;
