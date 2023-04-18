'use client';

import { FaHeart } from 'react-icons/fa';
import { MdLocationOn, MdMenuBook } from 'react-icons/md';

const ShopInfoButton = () => {
  return (
    <>
      <div className="card-actions justify-between">
        <button
          onClick={() => {}}
          className="
            btn 
            w-[31%] 
            bg-base-100 hover:bg-primary 
            text-base-content hover:text-base-100 
            text-lg max-[450px]:text-sm 
            border-0 
            rounded-xl 
            flex 
            gap-x-2 
            p-0"
        >
          <MdMenuBook className="text-xl max-[450px]:text-lg" />
          Menu
        </button>
        <button
          onClick={() => {}}
          className="
            btn 
            w-[31%] 
            bg-base-100 hover:bg-primary 
            text-base-content hover:text-base-100 
            text-lg max-[450px]:text-sm 
            border-0 
            rounded-xl 
            flex 
            gap-x-2 
            p-0"
        >
          <MdLocationOn className="text-xl max-[450px]:text-lg" />
          Posts
        </button>
        <button
          onClick={() => {}}
          className="
            btn 
            w-[32%] 
            bg-base-100 hover:bg-secondary-focus
            text-secondary-focus hover:text-base-100
            text-lg max-[450px]:text-sm 
            border-0 
            rounded-xl 
            flex 
            gap-x-2 
            p-0"
        >
          <FaHeart />
          Follow
        </button>
      </div>
    </>
  );
};

export default ShopInfoButton;
