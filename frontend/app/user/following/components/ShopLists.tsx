import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import ShopCardModal from "./ShopCardModal";

type GraphQLType = {
  followingList: {
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
    user: {
      account: string;
      avatar: {
        data: string;
      };
      name: string;
      phone: string;
      postCount: number;
    };
  }[];
};

const query = gql`
  query FollowingList {
    followingList {
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
      user {
        account
        avatar {
          data
        }
        name
        phone
        postCount
      }
    }
  }
`;

const FollowingShopList = async () => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({ query });

  return data.followingList.map((shop) => (
    <ShopCardModal shop={shop} key={shop.user.account} />
  ));
};

export default FollowingShopList;
