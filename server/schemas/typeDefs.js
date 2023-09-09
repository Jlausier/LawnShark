const typeDefs = `

  type Service {
    _id: ID
    name: String
  }

  type Bid {
    _id: ID
    amount: Int
    posting: Posting
    company: Company
  }

  type Posting {
    _id: ID
    service: Service
    askingPrice: Int
    estimatePrice: Int
    bids: [Bid]
    customer: Customer
  }

  type User {
    _id: ID
    email: String
    password: String
    _customer: Customer
    _company: Company
  }

  type Location {
    address: String
    city: String
    state: String
    zip: String
  }

  type Customer {
    _id: ID
    name: String
    location: Location
    postings: [Posting]
  }

  type Review {
    reviewText: String
    createAt: String
    rating: Int
    customer: Customer
  }

  type Company {
    _id: ID
    name: String
    description: String
    services: [Service]
    reviews: [Review]
  }

  type Query {
    services: [Service]
  }

`;

module.exports = typeDefs;
