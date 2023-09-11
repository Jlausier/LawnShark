import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

const loggingPlugin = {
  async requestDidStart(requestContext) {
    console.log("Request started! Query:\n" + requestContext.request.query);

    return {
      async parsingDidStart(requestContext) {
        console.log("Parsing started!\n" + requestContext);
      },

      async validationDidStart(requestContext) {
        console.log("Validation started\n" + requestContext);
      },
    };
  },
};

const link = createHttpLink({
  uri: "/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  plugins: [loggingPlugin],
});

export default client;
