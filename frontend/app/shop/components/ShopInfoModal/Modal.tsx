import { gql } from "@apollo/client";
import ShopInfoButton from "./Button";
import ShopProfile from "./Profile";
import ShopRates from "./Rates";
import { getClient } from "@/lib/client";

type GraphQLType = {
  store: {
    user: {
      account: string;
      name: string;
      phone: string;
      postCount: number;
    };
    address: string;
    info: string;
    storeRating: {
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
  query Store($account: String!) {
    store(account: $account) {
      user {
        account
        name
        phone
        postCount
      }
      address
      info
      storeRating {
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

const ShopInfoModal = async (shopAccount: string) => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({
    query,
    variables: {
      account: decodeURIComponent(shopAccount),
    },
  });

  return (
    <>
      <ShopProfile data={data.store} />
      <ShopInfoButton />
      <ShopRates rating={data.store.storeRating.rating} />
    </>
  );
};

export default ShopInfoModal;
