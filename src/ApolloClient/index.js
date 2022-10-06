import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: process.env.REACT_APP_GIT_TOKEN ? `bearer ${process.env.REACT_APP_GIT_TOKEN}` : "",
    }
  }
});

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
