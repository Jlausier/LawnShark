const { Company, User, Posting, Bid } = require('../models');

const resolvers = {
  Query: {
    postings: async () => {
      return await Posting.find({}).populate('bids')
      }
    }
  
};

module.exports = resolvers;
