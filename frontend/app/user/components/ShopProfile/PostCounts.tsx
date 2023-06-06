import { FaStar } from "react-icons/fa";

type Props = {
  postCount: number;
  checkInCount: number;
  generalRate: number;
};

const UserShopPostCounts = ({
  postCount,
  checkInCount,
  generalRate,
}: Props) => {
  return (
    <div className="w-full pt-4">
      <div className="stats shadow-basic flex">
        <div className="stat px-4 py-4 max-[450px]:py-2">
          <div className="stat-title font-semibold">Posts</div>
          <div className="stat-value font-bold text-right max-[450px]:text-3xl">
            {postCount}
          </div>
        </div>
        <div className="stat px-4 py-4 max-[450px]:py-2">
          <div className="stat-title font-semibold">Check in</div>
          <div className="stat-value font-bold text-right max-[450px]:text-3xl">
            {checkInCount}
          </div>
        </div>
        <div className="stat px-4 py-4 max-[450px]:py-2">
          <div className="stat-title font-semibold">Rate</div>
          <div
            className="
              stat-value 
              font-bold 
              text-accent 
              flex 
              justify-end 
              place-items-baseline 
              gap-x-2 
              max-[450px]:text-3xl"
          >
            <FaStar className="text-2xl" />
            {generalRate.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShopPostCounts;
