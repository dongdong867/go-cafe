import UserPostModal from "@/app/components/UserPostModal";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

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

const customerPostsQuery = gql`
  query CustomerPosts {
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

const UserPosts = async () => {
  const client = getClient();
  const { data } = await client.query({ query: customerPostsQuery });

  return (
    <>
      {data.selfPost.length > 0 && (
        <div className="text-2xl font-bold mt-8">History Post</div>
      )}
      <div className="divider my-2" />
      {data.selfPost.map((post: GraphQLCustomerPostType) => (
        <UserPostModal key={post.id} editable customerPost={post} />
      ))}
    </>
  );
};

export default UserPosts;
