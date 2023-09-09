const typeDefs = `
  type Posting {
    _id: ID
    name: String
    price: Int
    location: String
    bids: [Bid]
  }

  type Bid {
    _id: ID
    amount: Int
    posting: Posting
    company: Company
  }

  type Company {
    _id: ID
    name: String
    bids: [Bid]
  }

  type Query {
    postings: [Posting]
    
  }
`;

module.exports = typeDefs;
