import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SearchBar from "../components/Input/SearchBar";
import UserPostModal from "../components/UserPostModal";

type GraphQLType = {
  customerPosts: {
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
  }[];
};

const query = gql`
  query CustomerPost {
    customerPosts {
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

const Home = async () => {
  if (!cookies().has("role")) redirect("/login");
  if (cookies().get("role")!.value === "store") {
    redirect("/user");
  }

  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({ query });

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start place-items-center">
        <SearchBar />
        <div className="pb-4">
          {data.customerPosts.map((customerPost) => (
            <UserPostModal key={customerPost.id} customerPost={customerPost} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
