'use client';

import { gql, useQuery } from '@apollo/client';
//hooks
import { useEffect, useState } from 'react';

//icons
import { FiSearch } from 'react-icons/fi';
import UserPostModal from '../UserPostModal';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useSearchShop from '@/hooks/useSearchShop';
import { toast } from 'react-hot-toast';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([] as UserPost[]);

  const { data, error } = useSuspenseQuery(query, {
    variables: {
      storeAccount: searchQuery,
    },
  });

  if (error && searchQuery.length > 0) {
    toast.error('No Store Found', {
      className: 'font-bold text-lg',
    });
  }

  return (
    <>
      <div className="form-control w-full px-4 py-2">
        <div className="dropdown">
          <label tabIndex={0}>
            <div className="input-group input-group-md max-[450px]:input-group-sm">
              <input
                type="text"
                placeholder="Input store account"
                onChange={(e) => setQuery(e.currentTarget.value)}
                className="input input-bordered input-md max-[450px]:input-sm w-full focus:outline-none"
              />
              <button
                onClick={(e) => {}}
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
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
          >
            {storeList.map((store) => {
              return (
                <li key={store.user.account}>
                  <button
                    className="text-left py-0"
                    onClick={() => setPosts([])}
                  >
                    <span className="w-1/3 font-semibold">
                      @{store.user.account}
                    </span>
                    <span className="w-1/2">{store.user.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {posts.length > 0 && (
        <div className="pb-4">
          {posts.map((customerPost) => (
            <UserPostModal key={customerPost.id} customerPost={customerPost} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
