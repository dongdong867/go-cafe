"use client";

import useFollow from "@/app/hooks/useFollow";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { MdBorderColor, MdLocationOn } from "react-icons/md";

const ShopInfoButton = () => {
  const param = useParams();

  const { followed, handleFollow } = useFollow(
    decodeURIComponent(param.shopAccount)
  );

  return (
    <>
      <div className="card-actions flex-col space-y-2">
        <button
          onClick={handleFollow}
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
                ? "bg-red-500 hover:bg-red-600"
                : "bg-base-100 hover:bg-red-600"
            }
            ${followed ? "text-base-100 " : "text-red-600 hover:text-base-100"}
            `}
        >
          <FaHeart />
          Follow
        </button>
        <div className="w-full flex gap-x-4">
          <Link
            href={`/shop/${param.shopAccount}/menu`}
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
            href={`/shop/${param.shopAccount}/posts`}
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
