"use client";

import useSearchShop from "@/app/hooks/useSearchShop";
import { ApolloError, gql, useSuspenseQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import UserPostModal from "../UserPostModal";
import PageTitle from "../PageTitle";

const query = gql`
  query GetCustomerPostAtStore($storeAccount: String!) {
    customerPostAtStore(storeAccount: $storeAccount) {
      id
      post {
        body
        postPicture {
          picture {
            data
          }
        }
      }
      rating {
        general
        environment
        meals
        attitude
      }
      store {
        user {
          account
          name
        }
      }
      customer {
        user {
          name
        }
      }
    }
  }
`;

const SearchBar = () => {
  const { storeList, setQuery } = useSearchShop();
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data,
    error,
  }: {
    data: { customerPostAtStore: UserPost[] };
    error: ApolloError | undefined;
  } = useSuspenseQuery(query, {
    variables: {
      storeAccount: searchQuery,
    },
  });

  if (error) {
    toast.error("No Store Found", {
      className: "font-bold text-lg",
    });
  }

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <div className="form-control w-full px-4 py-2 max-[450px]:max-w-[360px] max-[450px]:px-0">
        <div className="dropdown">
          <label tabIndex={0}>
            <div className="input-group input-group-md">
              <input
                type="text"
                placeholder="Input store account or name"
                value={searchInput}
                onChange={(e) => {
                  setQuery(e.currentTarget.value);
                  setSearchInput(e.currentTarget.value);
                }}
                className="input input-bordered input-md max-[450px]:input-sm w-full focus:outline-none"
              />
              <button
                onClick={() => setSearchQuery(searchQuery)}
                className="
                  btn btn-square 
                  btn-md max-[450px]:btn-sm
                  bg-primary hover:bg-primary 
                  border-primary hover:border-primary 
                  text-base-100 
                  text-xl max-[450px]:text-base
                "
              >
                <FiSearch />
              </button>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-full"
          >
            {storeList.map((store) => {
              return (
                <li key={store.user.account}>
                  <button
                    className="text-left flex justify-between items-center gap-y-0 py-2 min-[450px]:py-0 max-[450px]:flex-col"
                    onClick={() => {
                      setSearchInput(store.user.account);
                      setSearchQuery(store.user.account);
                    }}
                  >
                    <span className="w-full text-base font-bold">
                      @{store.user.account}
                    </span>
                    <span className="w-full text-base font-medium">
                      {store.user.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {data.customerPostAtStore.length > 0 && (
        <div className="pb-4">
          {data.customerPostAtStore.map((customerPost) => (
            <UserPostModal key={customerPost.id} customerPost={customerPost} />
          ))}
          <div className="w-11/12 m-auto">
            <PageTitle title="Recommend posts" />
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default SearchBar;
