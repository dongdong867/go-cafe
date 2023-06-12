import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { cookies } from "next/headers";
import CustomerProfile from "./components/CustomerProfile";
import UserShopProfile from "./components/ShopProfile";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";
import UserPosts from "./components/UserPosts";
import ShopPosts from "./components/ShopPosts";

const UserPage = async () => {
  const role = cookies().get("role")?.value;

  const Info = () => {
    if (role === "customer") {
      return <CustomerProfile />;
    } else {
      return <UserShopProfile />;
    }
  };

  return (
    <div className="w-full h-fit max-w-lg max-[450px]:w-11/12 m-auto">
      <Suspense fallback={<Loading />}>
        <Info />
      </Suspense>
      <Suspense fallback={<Loading />}>
        {role === "customer" ? await UserPosts() : await ShopPosts()}
      </Suspense>
      <div className="w-full h-4" />
    </div>
  );
};

export default UserPage;
