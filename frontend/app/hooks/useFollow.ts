import { gql, useMutation } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
      const process = unfollow({
        variables: {
          unfollowInput: {
            storeAccount: storeAccount,
          },
        },
      });

      await toast
        .promise(
          process,
          {
            loading: "Processing...",
            success: "Unfollowed",
            error: (err) => err.message,
          },
          {
            className: "font-bold text-lg",
          }
        )
        .then(() => setFollowed(false));
    } else {
      const process = follow({
        variables: {
          followInput: {
            storeAccount: storeAccount,
          },
        },
      });

      await toast
        .promise(
          process,
          {
            loading: "Processing...",
            success: "Followed",
            error: (err) => err.message,
          },
          {
            className: "font-bold text-lg",
          }
        )
        .then(() => setFollowed(true));
    }
  };

  return { followed, handleFollow };
};

export default useFollow;
