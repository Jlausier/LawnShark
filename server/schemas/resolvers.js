const { Service, User, Posting, Bid } = require("../models");

const resolvers = {
  Query: {
    services: async () => {
      return await Service.find({});
    },
    postings: async() => {
      return await Posting.find({}).populate("bids").populate("customer").populate({
        path: "bids",
        populate: "company"
      });
    },
    companies: async() => {
      return await Company.find({});
    },
    customers: async() => {
      return await Customer.find({});
    }
  },

  Mutation: {
    // !!!!!!Needs to be changed to take into account customer/company!!!!!!!
    //addUser: async (parent, { username, email, password }) => {
    //  const user = await User.create({ username, email, password });
    //  const token = signToken(user);
    //  return { token, user };
    //},
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError
      }
      const token = signToken(user);
      return { token, user };
    }
  }
};


module.exports = resolvers;
