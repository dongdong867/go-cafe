import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { cookies } from 'next/headers';

const authLink = setContext((_, { headers }) => {
  const token = cookies().get('token');
  return {
    headers: {
      ...headers,
      authorization: token.value,
    },
  };
});

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
  fetchOptions: { cache: 'no-store' },
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
