import { gql } from '@apollo/client';
import UserInfo from './components/UserInfo';
import UserPostModal from '@/components/UserPostModal';
import { getClient } from '@/../lib/client';
import { cookies } from 'next/headers';

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
  const client = getClient();
  const { data } =
    cookies().get('role').value === 'customer'
      ? await client.query({ query: customerQuery })
      : await client.query({ query: shopQuery });
  return (
    <>
      <div className="w-full h-fit max-w-lg max-[450px]:w-11/12 m-auto">
        <UserInfo data={data.customer} />

        <div className="divider" />

        <div>
          <div className="text-2xl font-semibold my-4">History</div>
          {data.selfPost.map((post) => (
            <UserPostModal key={post.id} editable customerPost={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
