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
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer(userId: ID!, $name: String!, location: Location!) {
    addCustomer(userId: $userId, name: $name, location: $location) {
      user {
        _id
      }
      customer {
        name
      }
    }
  }
`;
