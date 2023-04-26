'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdBorderColor, MdLocationOn } from 'react-icons/md';

const ShopInfoButton = () => {
  const param = useParams();

  const [followed, setFollowed] = useState(false);

  const handleClick = () => {
    setFollowed((e) => !e);
  };

  return (
    <>
      <div className="card-actions flex-col space-y-2">
        <button
          onClick={handleClick}
          className={`
            btn 
            w-full
            text-lg
            border-0 
            rounded-xl 
            flex 
            gap-x-2 
            p-0
            ${
              followed
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-base-100 hover:bg-red-600'
            }
            ${followed ? 'text-base-100 ' : 'text-red-600 hover:text-base-100'}
            `}
        >
          <FaHeart />
          Follow
        </button>
        <div className="w-full flex gap-x-4">
          <Link
            href={`/shop/${param.shopId}/menu`}
            className="
            btn 
            grow
            bg-base-100 hover:bg-primary 
            text-base-content hover:text-base-100 
            text-lg
            border-0 
            rounded-xl 
            flex 
            gap-x-2 
            p-0"
          >
            <MdBorderColor className="text-xl max-[450px]:text-lg" />
            Order
          </Link>
          <Link
            href={`/shop/${param.shopId}/posts`}
            className="
            btn 
            grow
            bg-base-100 hover:bg-primary 
            text-base-content hover:text-base-100 
            text-lg
            border-0 
            rounded-xl 
            flex 
            gap-x-2 
            p-0"
          >
            <MdLocationOn className="text-xl max-[450px]:text-lg" />
            Posts
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopInfoButton;
