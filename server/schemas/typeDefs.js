const typeDefs = `
  type Service {
    _id: ID
    name: String
    description: String
  }

  type Bid {
    _id: ID
    amount: Int
    message: String
    posting: Posting
    company: Company
    accepted: Boolean
  }

  type Posting {
    _id: ID
    title: String
    description: String
    frequency: String
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
    role: String
  }

  type Location {
    address: String
    city: String
    state: String
    zip: String
  }

  input LocationInput {
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

  type CustomerUser {
    _id: String
    email: String
    _customer: Customer
  }

  type Review {
    reviewText: String
    createdAt: String
    rating: Int
    customer: Customer
  }

  type Company {
    _id: ID
    _user: User
    name: String
    description: String
    services: [Service]
    reviews: [Review]
    averageRating: Int
    reviewCount: Int
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    service(serviceId: ID!): Service
    services: [Service]
    posting(postingId: ID!, userRole: String!, roleId: ID!): Posting
    postingsFiltered(service: [ID]!): [Posting]
    myPostings(customerId: ID!): [Posting]
    myActivePostings(customerId: ID!, accepted: Boolean): [Posting]
    myBids(companyId: ID!): [Bid]
    myAcceptedBids(companyId: ID!, accepted: Boolean): [Bid]
    company(companyId: ID!): Company
    companies: [Company]
    companiesFiltered(searchText: String!, services: [ID]!): [Company]
    customer(customerId: ID!): Customer
    customers: [Customer]
    customerUser(userId: ID!): CustomerUser
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    signUpCompany(email: String!, password: String!, name: String!, bio: String!): Auth
    signUpCustomer(email: String!, password: String!, name: String!, location: LocationInput!): Auth
    login(email: String!, password: String!): Auth
    addCustomer(userId: String!, name: String!, location: LocationInput!): User
    addCompany(userId: String!, name: String!, description: String!, services: [ID]!): User
    addService(name: String!, description: String!): Service
    addPosting(customerId: ID!, serviceId: ID!, askingPrice: Int!, estimatePrice: Int, frequency: String!, description: String!, title: String!): Posting
    addBid(amount: Int!, message: String!, postingId: ID!, companyId: ID!): Bid
    acceptBid(bidId: ID!): Bid
  }
`;

module.exports = typeDefs;
