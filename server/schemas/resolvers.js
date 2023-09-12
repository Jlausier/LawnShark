const { Service, User, Posting, Bid, Customer, Company } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    service: async (_, { serviceId }) => {
      return await Service.findOne({ _id: serviceId });
    },

    services: async () => {
      return await Service.find();
    },

    posting: async (_, { postingId }) => {
      return await Posting.findOne({ _id: postingId })
        .populate("bids")
        .populate({
          path: "bids",
          populate: "company",
        })
        .populate("customer");
    },

    myPostings: async (_, { customerId }) => {
      return await Posting.find({ customer: customerId })
        .populate("service")
        .populate("customer");
    },

    company: async (_, { companyId }) => {
      return await Company.findOne({ _id: companyId })
        .populate("reviews")
        .populate("services");
    },

    companies: async () => {
      return await Company.find().populate("services");
    },

    customer: async (_, { customerId }) => {
      return await Customer.findOne({ _id: customerId })
        .populate("postings")
        .populate({
          path: "postings",
          populate: "service",
        });
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw AuthenticationError;
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) throw AuthenticationError;
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (_, { email, password }) => {
      const user = await User.create({ email, password });
      if (!user) throw AuthenticationError;
      const token = signToken(user);
      return { token, user };
    },

    /** @TODO Only add customer or company if they do not exist on _ user */

    addCustomer: async (_, { userId, name, location }) => {
      const customer = await Customer.create({ name, location: [location] });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { _customer: customer._id } },
        { new: true }
      ).populate("_customer");

      if (!user) throw AuthenticationError;
      return user;
    },

    addCompany: async (_, { userId, name, description, services }) => {
      const company = await Company.create({ name, description, services });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { _company: company._id } },
        { new: true }
      ).populate("_company");

      if (!user) throw AuthenticationError;
      return user;
    },

    addService: async (_, { name, description }) => {
      const service = await Service.create({ name, description });
      return service;
    },

    addPosting: async (
      _,
      {
        customerId,
        serviceId,
        askingPrice,
        estimatePrice,
        frequency,
        description,
        title,
      }
    ) => {
      const customer = await Customer.findById(customerId);
      if (!customer) throw AuthenticationError;

      const newPosting = await Posting.create({
        description,
        title,
        frequency,
        customer: customerId,
        service: serviceId,
        askingPrice,
        estimatePrice: estimatePrice || -1,
      });

      const posting = await Posting.findById(newPosting._id)
        .populate("customer")
        .populate("service");

      return posting;
    },
  },
};

module.exports = resolvers;
