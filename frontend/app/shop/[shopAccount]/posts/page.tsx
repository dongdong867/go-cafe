import UserPostsAtStore from "./components/UserPostsAtStore";
import { Suspense } from "react";
import Loading from "@/app/components/Loading/Loading";

type Props = {
  params: {
    shopAccount: string;
  };
};

const ShopPostsPage = async ({ params }: Props) => {
  return (
    <div className="w-full max-w-lg font-bold  max-[450px]:w-11/12 m-auto">
      <div className="text-3xl pt-4">Posts at</div>
      <div className="text-2xl">@{params.shopAccount}</div>
      <div className="divider" />

      <Suspense fallback={<Loading />}>
        {await UserPostsAtStore(params.shopAccount)}
      </Suspense>
    </div>
  );
};

export default ShopPostsPage;
