import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Image from "next/image";
import ShopInfoModal from "../components/ShopInfoModal/Modal";
import ShopPostModal from "../components/ShopPostModal";

type GraphQLType = {
  store: {
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
  storePost: {
    id: string;
    title: string;
    post: {
      body: string;
      postPicture: {
        picture: {
          data: string;
        };
      }[];
    };
  }[];
};

const query = gql`
  query Store($account: String!) {
    store(account: $account) {
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
    storePost(storeAccount: $account) {
      post {
        body
        postPicture {
          picture {
            data
          }
        }
      }
      id
      title
    }
  }
`;

type Props = {
  params: {
    shopAccount: string;
  };
};

const ShopPage = async ({ params }: Props) => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({
    query,
    variables: {
      account: decodeURIComponent(params.shopAccount),
    },
  });
  return (
    <>
      <div className="w-full max-w-lg h-full m-auto space-y-4">
        <Image
          src={data.store.user.avatar.data}
          alt=""
          width={1000}
          height={1000}
          className="sticky top-20 w-full max-w-lg "
        />

        <div className="card w-11/12 -top-14 m-auto bg-base-300">
          <div className="card-body space-y-2 px-6 py-8">
            <ShopInfoModal data={data.store} />
          </div>
        </div>

        <div className="w-11/12 m-auto">
          {data.storePost.map((post) => (
            <ShopPostModal key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
