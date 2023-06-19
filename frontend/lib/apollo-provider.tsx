"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  NextSSRInMemoryCache,
  SSRMultipartLink,
  ApolloNextAppProvider,
} from "@apollo/experimental-nextjs-app-support/ssr";

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "https://us-central1-gocafe-tw.cloudfunctions.net/api/graphql",
    fetchOptions: { cache: "no-store" },
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");

    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      },
    };
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : authLink.concat(httpLink),
  });
};

const makeSuspenseCache = () => {
  return new SuspenseCache();
};

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
};
