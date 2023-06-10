import UserAvatar from "./Avatar";
import UserShopInfo from "./ShopProfile/Info";
import UserShopPostCounts from "./ShopProfile/PostCounts";
import UserShopRating from "./ShopProfile/Rating";

type Props = {
  data: Shop;
};

const UserShopProfile = ({ data }: Props) => {
  return (
    <>
      <div className="flex pt-4 space-x-8 justify-around place-items-center">
        <UserAvatar src={data.user.avatar.data} />

        <div className="w-2/3 flex flex-col justify-center">
          <div className="text-3xl font-bold max-[450px]:text-xl">
            {data.user.name}
          </div>
          <div className="text-xl max-[450px]:text-lg font-semibold">
            @{data.user.account}
          </div>
        </div>
      </div>

      <UserShopPostCounts
        postCount={data.user.postCount}
        checkInCount={data.storeRating.postCount}
        generalRate={data.storeRating.rating.general}
      />
      <UserShopInfo
        phone={data.user.phone}
        address={data.address}
        info={data.info}
      />
      <UserShopRating rating={data.storeRating.rating} />
    </>
  );
};

export default UserShopProfile;
