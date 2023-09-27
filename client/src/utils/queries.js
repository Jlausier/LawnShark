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
  query posting($postingId: ID!, $userRole: String!, $roleId: ID!) {
    posting(postingId: $postingId, userRole: $userRole, roleId: $roleId) {
      _id
      title
      frequency
      description
      service {
        _id
        name
      }
      askingPrice
      estimatePrice
      bids {
        _id
        accepted
        amount
        message
        company {
          _id
          name
        }
      }
      customer {
        _id
        name
        location {
          address
          city
          state
          zip
        }
      }
    }
  }
`;

export const QUERY_COMPANY_POSTING = gql`
  query companyPosting($postingId: ID!, $companyId: ID!) {
    companyPosting(postingId: $postingId, companyId: $companyId) {
      _id
      title
      frequency
      description
      service {
        _id
        name
      }
      askingPrice
      estimatePrice
      bids {
        _id
        accepted
        amount
        message
        company {
          _id
          name
        }
      }
      customer {
        _id
        name
        location {
          address
          city
          state
          zip
        }
      }
    }
  }
`;

export const QUERY_POSTINGS_FILTERED = gql`
  query postingsFiltered($service: [ID]!) {
    postingsFiltered(service: $service) {
      _id
      title
      askingPrice
      frequency
      description
      service {
        _id
        name
      }
      customer {
        _id
        name
        location {
          address
          city
          state
          zip
        }
      }
    }
  }
`;

export const QUERY_MY_POSTINGS = gql`
  query myPostings($customerId: ID!) {
    myPostings(customerId: $customerId) {
      _id
      title
      askingPrice
      frequency
      description
      service {
        _id
        name
      }
      customer {
        _id
        name
        location {
          address
          city
          state
          zip
        }
      }
    }
  }
`;

export const QUERY_MY_ACTIVE_POSTINGS = gql`
  query myActivePostings($customerId: ID!) {
    myActivePostings(customerId: $customerId, accepted: true) {
      _id
      title
      askingPrice
      frequency
      description
      service {
        _id
        name
      }
      bids {
        _id
        accepted
        amount
        company {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_MY_BIDS = gql`
  query myBids($companyId: ID!, $accepted: Boolean!) {
    myBids(companyId: $companyId, accepted: $accepted) {
      _id
      amount
      accepted
      posting {
        _id
        title
        service {
          _id
          name
        }
        askingPrice
        estimatePrice
        customer {
          _id
          name
          location {
            address
            city
            state
            zip
          }
        }
        description
        frequency
      }
      company {
        _id
        name
      }
    }
  }
`;

export const QUERY_MY_ACCEPTED_BIDS = gql`
  query myAcceptedBids($companyId: ID!) {
    myAcceptedBids(companyId: $companyId, accepted: true) {
      _id
      amount
      accepted
      posting {
        _id
        title
        service {
          _id
          name
        }
        askingPrice
        estimatePrice
        customer {
          _id
          name
          location {
            address
            city
            state
            zip
          }
        }
        description
        frequency
      }
      company {
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
      reviewCount
    }
  }
`;
//Removed services from query for now, will reintroduce once we can add services to company
export const QUERY_COMPANIES_FILTERED = gql`
  query companiesFiltered($searchText: String!) {
    companiesFiltered(searchText: $searchText) {
      _id
      name
      description
      services {
        _id
        name
      }
      averageRating
      reviewCount
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

export const QUERY_CUSTOMER_USER = gql`
  query customerUser($userId: ID!) {
    customerUser(userId: $userId) {
      _id
      email
      _customer {
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
          title
          askingPrice
          frequency
          description
        }
      }
    }
  }
`;
