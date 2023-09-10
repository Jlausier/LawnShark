const { Service, User, Posting, Bid, Customer, Company } = require("../models");
import { signToken, AuthenticationError } from "../utils/auth";

const resolvers = {
  Query: {
    service: async (parent, { serviceId }) => {
      return await Service.findOne({ _id: serviceId });
    },
    services: async () => {
      return await Service.find();
    },
    posting: async (parent, { postingId }) => {
      return await Posting.findOne({ _id: postingId })
        .populate("bids")
        .populate("customer")
        .populate({
          path: "bids",
          populate: "company",
        })
        .populate({
          path: "customer",
          populate: "location",
        });
    },
    postings: async () => {
      return await Posting.find()
        .populate("bids")
        .populate("customer")
        .populate({
          path: "bids",
          populate: "company",
        })
        .populate({
          path: "customer",
          populate: "location",
        });
    },
    company: async (parent, { companyId }) => {
      return await Company.findOne({ _id: companyId })
        .populate("reviews")
        .populate("services");
    },
    companies: async () => {
      return await Company.find().populate("reviews");
    },
    customer: async (parent, { customerId }) => {
      return await Customer.findOne({ _id: customerId })
        .populate("location")
        .populate("postings");
    },
    customers: async () => {
      return await Customer.find({});
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      /** @TODO handle user creation error */

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
