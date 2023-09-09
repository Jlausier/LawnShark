const typeDefs = `

  type Service {
    _id: ID
    name: String
  }

  type Bid {
    _id: ID
    amount: Number
    posting: Posting
    company: Company
  }

  type Posting {
    _id: ID
    service: Service
    askingPrice: Number
    estimatePrice: Number
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

  type Customer {
    _id: ID
    name: String
    location: {
      address: String
      city: String
      state: String
      zip: String
    }
    postings: [Posting]
  }

  type Company {
    _id: ID
    name: String
    description: String
    services: [Service]
    reviews: [{
      reviewText: String
      createAt: Date
      rating: Number
      customer: Customer
    }]
  }

`;

module.exports = typeDefs;
