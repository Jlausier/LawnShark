const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "littlesecrets-passionpit";
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  signToken: function ({ email, _id, role }) {
    const payload = { email, _id, role };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
