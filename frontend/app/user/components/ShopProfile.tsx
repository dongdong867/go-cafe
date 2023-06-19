import { gql } from "@apollo/client";
import UserAvatar from "./Avatar";
import UserShopInfo from "./ShopProfile/Info";
import UserShopPostCounts from "./ShopProfile/PostCounts";
import UserShopRating from "./ShopProfile/Rating";
import { getClient } from "@/lib/client";

type GraphQLType = {
  storeSelf: {
    user: {
      avatar: {
        data: string;
      };
      account: string;
      name: string;
      phone: string;
      postCount: number;
    };
    address: string;
    info: string;
    storeRating: {
      postCount: number;
      rating: {
        general: number;
        environment: number;
        meals: number;
        attitude: number;
      };
    };
  };
};

const query = gql`
  query Self {
    storeSelf {
      user {
        avatar {
          data
        }
        account
        name
        phone
        postCount
      }
      address
      info
      storeRating {
        postCount
        rating {
          general
          environment
          meals
          attitude
        }
      }
    }
  }
`;

const UserShopProfile = async () => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({ query });
  return (
    <>
      <div className="flex pt-4 space-x-8 justify-around place-items-center">
        <UserAvatar src={data.storeSelf.user.avatar.data} />

        <div className="w-2/3 flex flex-col justify-center">
          <div className="text-3xl font-bold max-[450px]:text-xl">
            {data.storeSelf.user.name}
          </div>
          <div className="text-xl max-[450px]:text-lg font-semibold">
            @{data.storeSelf.user.account}
          </div>
        </div>
      </div>

      <UserShopPostCounts
        postCount={data.storeSelf.user.postCount}
        checkInCount={data.storeSelf.storeRating.postCount}
        generalRate={data.storeSelf.storeRating.rating.general}
      />
      <UserShopInfo
        phone={data.storeSelf.user.phone}
        address={data.storeSelf.address}
        info={data.storeSelf.info}
      />
      <UserShopRating rating={data.storeSelf.storeRating.rating} />
    </>
  );
};

export default UserShopProfile;
