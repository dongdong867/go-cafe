import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useState } from 'react';

const SEARCH = gql`
  query Stores($query: String!) {
    stores(query: $query) {
      user {
        avatar {
          data
        }
        account
        name
      }
    }
  }
`;

const useSearchShop = () => {
  const [query, setQuery] = useState('');

  const {
    data,
  }: {
    data: {
      stores: {
        user: {
          avatar: {
            data: string;
          };
          account: string;
          name: string;
        };
      }[];
    };
  } = useSuspenseQuery(SEARCH, {
    variables: {
      query: query,
    },
  });

  return { query, storeList: data.stores, setQuery };
};

export default useSearchShop;
