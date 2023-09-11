import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        role
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
  ) {
    posting(
      customerId: $customerId
      serviceId: $serviceId
      askingPrice: $askingPrice
      estimatePrice: $estimatePrice
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
    }
  }
`;
