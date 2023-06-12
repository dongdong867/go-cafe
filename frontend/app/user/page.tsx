import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { cookies } from "next/headers";
import CustomerProfile from "./components/CustomerProfile";
import UserShopProfile from "./components/ShopProfile";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";
import UserPosts from "./components/UserPosts";
import ShopPosts from "./components/ShopPosts";

const customerQuery = gql`
  query Customer {
    customer {
      user {
        avatar {
          data
        }
        account
        name
        phone
        postCount
      }
      email
      followingCount
    }
  }
`;

const shopQuery = gql`
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

const UserPage = async () => {
  const role = cookies().get("role")?.value;

  const client = getClient();
  const { data } =
    role === "customer"
      ? await client.query({ query: customerQuery })
      : await client.query({ query: shopQuery });

  const Info = () => {
    if (role === "customer") {
      return <CustomerProfile data={data.customer} />;
    } else {
      return <UserShopProfile data={data.storeSelf} />;
    }
  };

  return (
    <div className="w-full h-fit max-w-lg max-[450px]:w-11/12 m-auto">
      <Info />
      <Suspense fallback={<Loading />}>
        {role === "customer" ? await UserPosts() : await ShopPosts()}
      </Suspense>
      <div className="w-full h-4" />
    </div>
  );
};

export default UserPage;
