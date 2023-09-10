import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: "/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
