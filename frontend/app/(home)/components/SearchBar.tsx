"use client";

import useSearchShop from "@/app/hooks/useSearchShop";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import { Suspense } from "react";
import ClientLoading from "@/app/components/Loading/ClientLoading";
import SearchPostResult from "./SearchPostResult";
import SearchBarLoading from "./SearchBarLoading";

type SearchResultType = {
  user: {
    account: string;
    name: string;
  };
};

const SearchBar = () => {
  const { storeList, setQuery } = useSearchShop();
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const SearchDropdown = ({ storeList }: { storeList: SearchResultType[] }) => {
    return (
      <ul
        tabIndex={0}
        className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-full"
      >
        {storeList.map((store) => {
          return (
            <li key={store.user.account}>
              <button
                className="text-left h-12 max-[450px]:h-16 flex justify-between items-center gap-y-0 min-[450px]:py-0 max-[450px]:flex-col"
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
    );
  };

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
                className="input input-bordered input-md font-semibold max-[450px]:input-sm max-[450px]:py-[18px] w-full focus:outline-none"
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
                  max-[450px]:h-[38px]
                "
              >
                <FiSearch />
              </button>
            </div>
          </label>
          <Suspense fallback={<ClientLoading />}>
            <SearchDropdown storeList={storeList} />
          </Suspense>
        </div>
      </div>
      {searchQuery.length !== 0 && (
        <Suspense fallback={<SearchBarLoading />}>
          <SearchPostResult searchQuery={searchQuery} />
        </Suspense>
      )}
      <Toaster />
    </>
  );
};

export default SearchBar;
