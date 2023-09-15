const { Service, User, Posting, Bid, Customer, Company } = require("../models");
const {
  signToken,
  AuthenticationError,
  ForbiddenError,
} = require("../utils/auth");

const resolvers = {
  Query: {
    service: async (_, { serviceId }) => {
      return await Service.findOne({ _id: serviceId });
    },

    services: async () => {
      return await Service.find();
    },

    posting: async (_, { postingId, userRole, roleId }) => {
      const options = {};
      if (userRole === "customer") {
        options.customer = roleId;
      }

      const posting = await Posting.findOne({ _id: postingId, ...options })
        .populate("customer")
        .populate({
          path: "customer",
          populate: "location",
        })
        .populate("service")
        .populate("bids")
        .populate({
          path: "bids",
          populate: "company",
        });

      if (!posting) throw ForbiddenError;
      return posting;
    },

    postingsFiltered: async (_, { service }) => {
      const options = {};
      if (service.length > 0) options.service = service;

      return await Posting.find(options)
        .populate("service")
        .populate("customer");
    },

    myPostings: async (_, { customerId }) => {
      return await Posting.find({ customer: customerId })
        .populate("service")
        .populate("customer");
    },

    myActivePostings: async (_, { customerId }) => {
      return await Posting.find({ customer: customerId, accepted: true })
        .populate("service")
        .populate("customer")
        .populate({
          path: "bids",
          match: { accepted: true },
          populate: "company",
        });
    },

    myBids: async (_, { companyId }) => {
      return await Bid.find({ company: companyId })
        .populate("posting")
        .populate({
          path: "posting",
          populate: "customer",
        });
    },

    myAcceptedBids: async (_, { companyId }) => {
      return await Bid.find({ company: companyId, accepted: true })
        .populate("posting")
        .populate({
          path: "posting",
          populate: "customer",
        });
    },

    company: async (_, { companyId }) => {
      return await Company.findOne({ _id: companyId }).populate("reviews");
    },

    companies: async () => {
      return await Company.find().populate("services");
    },

    companiesFiltered: async (_, { searchText, services }) => {
      const options = {};

      if (searchText !== "")
        options.name = { $regex: searchText, options: "i" };
      if (services.length > 0) options.services = services;

      return await Company.find(options).populate(services);
    },

    customer: async (_, { customerId }) => {
      return await Customer.findOne({ _id: customerId })
        .populate("postings")
        .populate({
          path: "postings",
          populate: "service",
        });
    },

    customerUser: async (_, { userId }) => {
      return await User.findById(userId).populate({
        path: "_customer",
        populate: {
          path: "postings",
        },
      });
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email })
        .populate("_customer")
        .populate("_company");
      if (!user) throw AuthenticationError;
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) throw AuthenticationError;

      let roleId = "";
      let role = "";
      if (user._customer) {
        role = "customer";
        roleId = user._customer._id;
      } else if (user._company) {
        role = "company";
        roleId = user._company._id;
      }

      const token = signToken({
        ...user.toJSON(),
        roleId,
        role,
      });

      return { token, user };
    },

    addUser: async (_, { email, password }) => {
      const user = await User.create({ email, password });
      if (!user) throw AuthenticationError;
      const token = signToken(user);
      return { token, user };
    },

    signUpCompany: async (_, { email, password, name, bio }) => {
      const newUser = await User.create({ email, password });
      if (!newUser) throw AuthenticationError;

      const company = await Company.create({
        name,
        description: bio,
        email,
        _user: newUser._id,
      });

      if (!company) {
        await User.deleteOne({ _id: newUser._id });
        throw AuthenticationError;
      }

      const user = await User.findByIdAndUpdate(
        newUser._id,
        { $set: { _company: company._id } },
        { new: true }
      ).populate("_company");

      const token = signToken({
        ...user.toJSON(),
        roleId: company._id,
        role: "company",
      });

      return { token, user };
    },

    signUpCustomer: async (_, { email, password, name, location }) => {
      const newUser = await User.create({ email, password });
      if (!newUser) throw AuthenticationError;

      const customer = await Customer.create({
        name,
        location,
      });

      if (!customer) {
        await User.deleteOne({ _id: newUser._id });
        throw AuthenticationError;
      }

      const user = await User.findByIdAndUpdate(
        newUser._id,
        { $set: { _customer: customer._id } },
        { new: true }
      ).populate("_customer");

      const token = signToken({
        ...user.toJSON(),
        roleId: customer._id,
        role: "customer",
      });

      return { token, user };
    },

    /** @TODO Only add customer or company if they do not exist on user */

    addCustomer: async (_, { userId, name, location }) => {
      const customer = await Customer.create({
        name,
        location,
        role: "customer",
      });
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { _customer: customer._id } },
        { new: true }
      ).populate("_customer");

      if (!user) throw AuthenticationError;
      return user;
    },

    addCompany: async (_, { userId, name, description, services }) => {
      const company = await Company.create({
        name,
        description,
        services,
        role: "company",
      });
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

    addBid: async (_, { amount, message, postingId, companyId }) => {
      const newBid = await Bid.create({
        amount,
        message,
        posting: postingId,
        company: companyId,
      });

      /** @TODO validate posting has new bid */
      await Posting.findByIdAndUpdate(postingId, {
        $addToSet: { bids: newBid._id },
      });

      const bid = await Bid.findById(newBid._id)
        .populate("posting")
        .populate("company");

      return bid;
    },

    acceptBid: async (_, { bidId }) => {
      const bid = await Bid.findOneAndUpdate(
        { _id: bidId },
        { accepted: true },
        { new: true }
      );
      if (!bid) throw new Error(`Bid with ID ${bidId} not found`);
      return bid;
    },
  },
};

module.exports = resolvers;
