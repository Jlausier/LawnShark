import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        role
        _customer {
          _id
          name
          location {
            address
            city
            state
            zip
          }
        }
        _company {
          _id
          name
          description
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    user(email: $email, password: $password) {
      token
      user {
        _id
        email
        role
      }
    }
  }
`;

export const SIGN_UP_COMPANY = gql`
  mutation signUpCompany(
    $email: String!
    $password: String!
    $name: String!
    $bio: String!
  ) {
    signUpCompany(email: $email, password: $password, name: $name, bio: $bio) {
      token
      user {
        _id
        email
        _company {
          _id
          name
          description
        }
      }
    }
  }
`;

export const SIGN_UP_CUSTOMER = gql`
  mutation signUpCustomer(
    $email: String!
    $password: String!
    $name: String!
    $location: LocationInput!
  ) {
    signUpCustomer(email: $email, password: $password, name: $name, bio: $bio) {
      token
      user {
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
        }
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer(
    $userId: ID!
    $name: String!
    $location: LocationInput!
  ) {
    customer(userId: $userId, name: $name, location: $location) {
      user {
        _id
        _customer
        role
      }
    }
  }
`;

export const ADD_COMPANY = gql`
  mutation addCompany(
    $userId: ID!
    $description: String!
    $services: [ServiceInput]!
  ) {
    company(userId: $userId, description: $description, services: $services) {
      user {
        _id
        _company
        role
      }
    }
  }
`;

export const ADD_POSTING = gql`
  mutation addPosting(
    $customerId: ID!
    $serviceId: ID!
    $askingPrice: Int!
    $estimatePrice: Int
    $frequency: String!
    $description: String!
    $title: String!
  ) {
    addPosting(
      customerId: $customerId
      serviceId: $serviceId
      askingPrice: $askingPrice
      estimatePrice: $estimatePrice
      frequency: $frequency
      description: $description
      title: $title
    ) {
      customer {
        _id
        name
      }
      _id
      service {
        _id
        name
      }
      askingPrice
      estimatePrice
      frequency
      description
      title
    }
  }
`;

export const ADD_BID = gql`
  mutation addBid(
    $amount: Int!
    $message: String!
    $postingId: ID!
    $companyId: ID!
  ) {
    addBid(
      amount: $amount
      message: $message
      postingId: $postingId
      companyId: $companyId
    ) {
      amount
      posting {
        _id
      }
      company {
        _id
        name
      }
    }
  }
`;

export const ACCEPT_BID = gql`
  mutation acceptBid($bidId: ID!) {
    acceptBid(bidId: $bidId) {
      _id
      accepted
    }
  }
`;
