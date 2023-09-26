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
  ForbiddenError: new GraphQLError("Access to resource denied.", {
    extensions: {
      code: "FORBIDDEN",
    },
  }),
  CreationError: new GraphQLError("Could not create resource.", {
    extensions: {
      code: "CREATE",
    },
  }),
  signToken: function ({ email, _id, role, roleId }) {
    const payload = { email, _id, role, roleId };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
