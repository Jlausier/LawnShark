const { Service, User, Posting, Bid } = require("../models");

const resolvers = {
  Query: {
    services: async () => {
      return await Service.find({});
    },
    postings: async() => {
      return await Posting.find({})
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
  }
}


module.exports = resolvers;
