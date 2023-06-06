import { getClient } from '@/../lib/client';
import PageTitle from '@/components/PageTitle';
import UserPostModal from '@/components/UserPostModal';
import useToast from '@/hooks/useToast';
import { gql } from '@apollo/client';

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
  const { data, error } = await client.query({
    query,
    variables: {
      storeAccount: decodeURIComponent(params.shopAccount),
    },
  });

  if (error) {
    useToast(error.message, 'error');
  }

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
