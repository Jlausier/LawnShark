const { Service, User, Posting, Bid } = require("../models");

const resolvers = {
  Query: {
    services: async () => {
      return Service.find({});
    },
  },
};

module.exports = resolvers;
