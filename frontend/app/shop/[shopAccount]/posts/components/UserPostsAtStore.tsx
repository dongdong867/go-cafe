import UserPostModal from "@/app/components/UserPostModal";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

type GraphQLType = {
  customerPostAtStore: {
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
  query GetCustomerPostAtStore($storeAccount: String!) {
    customerPostAtStore(storeAccount: $storeAccount) {
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
          name
        }
      }
    }
  }
`;

const UserPostsAtStore = async (shopAccount: string) => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({
    query,
    variables: {
      storeAccount: shopAccount,
    },
  });

  return data.customerPostAtStore.map((post) => (
    <UserPostModal key={post.id} customerPost={post} />
  ));
};

export default UserPostsAtStore;
