import { TOKEN, API_URL, WSS } from "@env";
import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client';
import { setContext } from "apollo-link-context";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from "@jumpn/utils-graphql";

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`,
    }
  };
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket(WSS, {
  params: () => {
    return { token: TOKEN };
  }
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
  operation => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;