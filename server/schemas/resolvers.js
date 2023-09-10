const { Service, User, Posting, Bid, Customer, Company } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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
      if (!user) throw AuthenticationError;
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) throw AuthenticationError;
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      if (!user) throw AuthenticationError;
      const token = signToken(user);
      return { token, user };
    },

    addCustomer: async (parent, { userId, name, location }) => {
      const customer = await Customer.create({ name, location });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { _customer: customer._id } },
        { new: true }
      ).populate("_customer");

      if (!user) throw AuthenticationError;
      return { user };
    },

    addCompany: async (parent, { userId, name, description, services }) => {
      const company = await Company.create({ name, description, services });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { _company: company._id } },
        { new: true }
      ).populate("_company");

      if (!user) throw AuthenticationError;
      return { user };
    },
  },
};

module.exports = resolvers;
