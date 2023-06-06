import UserAvatar from './Avatar';
import UserShopInfo from './ShopProfile/Info';
import UserShopPostCounts from './ShopProfile/PostCounts';
import UserShopRating from './ShopProfile/Rating';

type Props = {
  data: Shop;
};

const UserShopProfile = ({ data }: Props) => {
  return (
    <>
      <div className="flex justify-around place-items-center pt-4">
        <UserAvatar src={data.user.avatar.data} />

        <div>
          <div className="text-4xl max-[450px]:text-3xl font-bold">
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
