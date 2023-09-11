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
  
  query company($companyId) {
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

  query customer($customerId) {
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
