'use client';

import PageTitle from '@/components/PageTitle';
import ShopCardModal from './components/ShopCardModal';
import { gql } from '@apollo/client';
import { getClient } from '@/../lib/client';

const query = gql`
  query FollowingList {
    followingList {
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
      user {
        account
        avatar {
          data
        }
        name
        phone
        postCount
      }
    }
  }
`;

const FollowingPage = async () => {
  const client = getClient();
  const { data } = await client.query({ query });
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto">
        <PageTitle title="Following List" />
        <div className="flex flex-col space-y-4">
          {data.followingList.map((shop) => (
            <ShopCardModal shop={shop} key={shop.user.account} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FollowingPage;
