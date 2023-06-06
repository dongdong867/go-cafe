import { gql, useMutation } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useState } from 'react';

const query = gql`
  query IsFollowing($storeAccount: String!) {
    isFollowing(storeAccount: $storeAccount)
  }
`;

const FOLLOW = gql`
  mutation Follow($followInput: FollowInput!) {
    follow(followInput: $followInput)
  }
`;

const UNFOLLOW = gql`
  mutation Unfollow($unfollowInput: FollowInput!) {
    unfollow(unfollowInput: $unfollowInput)
  }
`;

const useFollow = (storeAccount: string) => {
  const { data }: { data: { isFollowing: boolean } } = useSuspenseQuery(query, {
    variables: {
      storeAccount: storeAccount,
    },
  });

  const [follow] = useMutation(FOLLOW);
  const [unfollow] = useMutation(UNFOLLOW);

  const [followed, setFollowed] = useState(data.isFollowing);

  const handleFollow = async () => {
    if (followed) {
      await unfollow({
        variables: {
          unfollowInput: {
            storeAccount: storeAccount,
          },
        },
      });
      setFollowed(false);
    } else {
      await follow({
        variables: {
          followInput: {
            storeAccount: storeAccount,
          },
        },
      });
      setFollowed(true);
    }
  };

  return { followed, handleFollow };
};

export default useFollow;
