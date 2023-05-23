import { getClient } from '@/../lib/client';
import SearchBar from '@/components/Input/SearchBar';
import UserPostModal from '@/components/UserPostModal';
import { gql } from '@apollo/client';

const query = gql`
  query CustomerPost {
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
  console.log(data.customerPost);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start place-items-center">
        <SearchBar route="home" />
        <div className="pb-4">
          {data.customerPost.map((customerPost) => (
            <UserPostModal key={customerPost.id} customerPost={customerPost} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
