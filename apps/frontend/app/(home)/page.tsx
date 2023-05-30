import { getClient } from '@/../lib/client';
import SearchBar from '@/components/Input/SearchBar';
import UserPostModal from '@/components/UserPostModal';
import { gql } from '@apollo/client';

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
  const client = getClient();
  const { data } = await client.query({ query });

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
