import { gql, useSuspenseQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";

type GraphQLType = {
  stores: {
    user: {
      account: string;
      name: string;
    };
  }[];
};

type SearchResultType = {
  user: {
    account: string;
    name: string;
  };
};

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
  const [query, setQuery] = useState("");
  const [storeList, setStoreList] = useState([] as SearchResultType[]);

  const { data }: { data: GraphQLType } = useSuspenseQuery(SEARCH, {
    variables: {
      query: "",
    },
  });

  useEffect(() => {
    setStoreList(
      data.stores.filter(
        (store) =>
          store.user.account.includes(query) || store.user.name.includes(query)
      )
    );
  }, [query]);

  return { query, storeList, setQuery };
};

export default useSearchShop;
