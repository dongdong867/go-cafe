import PageTitle from "@/app/components/PageTitle";
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

type Props = {
  params: {
    shopAccount: string;
  };
};

const ShopPostsPage = async ({ params }: Props) => {
  const client = getClient();
  const { data }: { data: GraphQLType } = await client.query({
    query,
    variables: {
      storeAccount: decodeURIComponent(params.shopAccount),
    },
  });

  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
        <PageTitle
          title={`Post at @${decodeURIComponent(params.shopAccount)}`}
        />
        {data.customerPostAtStore.map((post) => (
          <UserPostModal key={post.id} customerPost={post} />
        ))}
      </div>
    </>
  );
};

export default ShopPostsPage;
