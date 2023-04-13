'use client';

//hooks
import { useState } from 'react';

//icons
import { FiSearch } from 'react-icons/fi';

type Props = {
  route: string;
};

const SearchBar = ({ route }: Props) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <div className="form-control w-full px-4 py-2">
        <div className="input-group input-group-md max-[450px]:input-group-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            className="input input-bordered input-md max-[450px]:input-sm w-full"
          />
          <button
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
      </div>
    </>
  );
};

export default SearchBar;
