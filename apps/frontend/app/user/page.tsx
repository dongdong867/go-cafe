import { gql } from '@apollo/client';
import UserInfo from './components/UserInfo';
import UserPostModal from '@/components/UserPostModal';
import { getClient } from '@/../lib/client';

const query = gql`
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
    customerPost {
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

const UserPage = async () => {
  const client = getClient();
  const { data } = await client.query({ query });
  return (
    <>
      <div className="w-full h-fit max-w-lg max-[450px]:w-11/12 m-auto">
        <UserInfo data={data.customer} />

        <div className="divider" />

        <div>
          <div className="text-2xl font-semibold my-4">History</div>
          {data.customerPost.map((post) => (
            <UserPostModal key={post.id} editable customerPost={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
