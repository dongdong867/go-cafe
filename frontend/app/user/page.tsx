import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { cookies } from "next/headers";
import CustomerProfile from "./components/CustomerProfile";
import UserShopProfile from "./components/ShopProfile";
import UserPostModal from "../components/UserPostModal";
import ShopPostModal from "../shop/components/ShopPostModal";

type GraphQLCustomerPostType = {
  id: string;
  post: {
    body: string;
    postPicture: {
      picture: {
        data: string;
      };
    }[];
  };
  rating: {
    general: number;
    environment: number;
    meals: number;
    attitude: number;
  };
  store: {
    user: {
      account: string;
      name: string;
    };
  };
  customer: {
    user: {
      account: string;
      name: string;
    };
  };
};

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
    selfPost {
      id
      post {
        body
        postPicture {
          picture {
            data
          }
        }
      }
      rating {
        general
        environment
        meals
        attitude
      }
      store {
        user {
          account
          name
        }
      }
      customer {
        user {
          account
          name
        }
      }
    }
  }
`;

type GraphQLShopPostType = {
  post: {
    body: string;
    postPicture: {
      picture: {
        data: string;
      };
    }[];
  };
  id: string;
  title: string;
};

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
    storeSelfPost {
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

  const PostList = () => {
    if (role === "customer") {
      return data.selfPost.map((post: GraphQLCustomerPostType) => (
        <UserPostModal key={post.id} editable customerPost={post} />
      ));
    } else {
      return data.storeSelfPost.map((post: GraphQLShopPostType) => (
        <ShopPostModal key={post.id} editable post={post} />
      ));
    }
  };
  return (
    <>
      <div className="w-full h-fit max-w-lg max-[450px]:w-11/12 m-auto">
        <Info />

        <div>
          <div className="text-2xl font-bold mt-8">History Post</div>
          <div className="divider my-2" />
          <PostList />
        </div>
      </div>
    </>
  );
};

export default UserPage;
