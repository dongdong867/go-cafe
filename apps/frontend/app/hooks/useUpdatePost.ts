import { useEffect, useState } from 'react';
import useRating from './useRating';
import { gql, useMutation } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useToast from './useToast';
import { redirect } from 'next/navigation';

const query = gql`
  query CustomerPost($postId: ID!) {
    customerPost(postId: $postId) {
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

const UPDATE_POST = gql`
  mutation UpdateCustomerPost(
    $updateCustomerPostInput: UpdateCustomerPostInput!
  ) {
    updateCustomerPost(updateCustomerPostUInput: $updateCustomerPostInput)
  }
`;

const useUpdatePost = (postId: string) => {
  const { data: originData }: { data: { customerPost: UserPost } } =
    useSuspenseQuery(query, {
      variables: {
        postId: postId,
      },
    });

  const [body, setBody] = useState(originData.customerPost.post.body);
  const { rating, setRate } = useRating(originData.customerPost.rating);

  const [updateCustomerPost, { data, error }] = useMutation(UPDATE_POST);

  useEffect(() => {
    if (data) redirect('/');
  }, [data]);

  if (error) {
    console.log(error);
  }

  const updatePost = async () => {
    await updateCustomerPost({
      variables: {
        updateCustomerPostInput: {
          id: originData.customerPost.id,
          body: body,
          rating: {
            general: rating.general,
            environment: rating.environment,
            meals: rating.meals,
            attitude: rating.attitude,
          },
        },
      },
    });
  };

  return {
    body,
    rating,
    shop: originData.customerPost.store,
    setRate,
    setBody,
    updatePost,
  };
};

export default useUpdatePost;
