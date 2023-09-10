const { Service, User, Posting, Bid, Customer, Company } = require("../models");

const resolvers = {
  Query: {

    service: async (parent, {serviceId}) => {
      return await Service.findOne({_id: serviceId});
    },
    services: async () => {
      return await Service.find();
    },
    posting: async(parent, {postingId}) => {
      return await Posting.findOne({_id: postingId}).populate("bids").populate("customer").populate({
        path: "bids",
        populate: "company"
      }).populate({
        path: "customer",
        populate: "location"
      });
    },  
    postings: async() => {
      return await Posting.find().populate("bids").populate("customer").populate({
        path: "bids",
        populate: "company"
      }).populate({
        path: "customer",
        populate: "location"
      });
    },
    company: async(parent, {companyId}) => {
      return await Company.findOne({_id: companyId}).populate("reviews").populate("services")
    },
    companies: async() => {
      return await Company.find().populate("reviews");
    },
    customer: async(parent, {customerId}) => {
      return await Customer.findOne({_id: customerId}).populate("location").populate("postings");
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
