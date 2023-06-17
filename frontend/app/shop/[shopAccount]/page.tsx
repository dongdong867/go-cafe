import Image from "next/image";
import ShopInfoModal from "../components/ShopInfoModal/Modal";
import { Suspense } from "react";
import ShopPostsLoading from "../components/Loading/ShopPostsLoading";
import ShopPosts from "../components/ShopPosts";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import ShopInfoLoading from "../components/Loading/ShopInfoLoading";

const query = gql`
  query Shop($shopAccount: String!) {
    store(account: $shopAccount) {
      user {
        avatar {
          data
        }
      }
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
  const { data } = await client.query({
    query,
    variables: { shopAccount: decodeURIComponent(params.shopAccount) },
  });

  return (
    <div className="w-full max-w-lg h-full m-auto space-y-4">
      <Suspense fallback={<div className="loading loading-spinner" />}>
        <Image
          src={data.store.user.avatar.data}
          alt=""
          width={1000}
          height={1000}
          className="sticky top-20 w-full max-w-lg "
        />
      </Suspense>

      <div className="card w-11/12 -top-14 m-auto bg-base-300">
        <Suspense fallback={<ShopInfoLoading />}>
          <div className="card-body space-y-2 px-6 py-8">
            {await ShopInfoModal(params.shopAccount)}
          </div>
        </Suspense>
      </div>

      <Suspense fallback={<ShopPostsLoading />}>
        <div className="w-11/12 m-auto">
          {await ShopPosts(params.shopAccount)}
        </div>
      </Suspense>
    </div>
  );
};

export default ShopPage;
