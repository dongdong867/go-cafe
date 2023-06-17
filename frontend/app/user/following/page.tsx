"use server";

import PageTitle from "@/app/components/PageTitle";
import FollowingShopList from "./components/ShopLists";
import { Suspense } from "react";
import Loading from "@/app/components/Loading/Loading";

const FollowingPage = async () => {
  return (
    <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
      <PageTitle title="Following List" />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col space-y-4">
          {await FollowingShopList()}
        </div>
      </Suspense>
    </div>
  );
};

export default FollowingPage;
