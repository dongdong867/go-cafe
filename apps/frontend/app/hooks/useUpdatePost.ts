import { useEffect, useState } from 'react';
import useRating from './useRating';
import { gql, useMutation } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useToast from './useToast';
import { redirect } from 'next/navigation';
import { useBase64 } from './useBase64';
import { uploadPicture } from '@/../lib/picture-upload';

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
  const [addedPicture, setAddedPicture] = useState([] as File[]);
  const [deletedPicture, setDeletedPicture] = useState([] as string[]);
  const { rating, setRate } = useRating(originData.customerPost.rating);

  const [updateCustomerPost] = useMutation(UPDATE_POST);

  const updatePost = async () => {
    const addedPictureUrlList = await Promise.all(
      addedPicture.map(async (picture) => {
        const base64 = await useBase64(picture);
        return await uploadPicture(base64);
      })
    );
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
    originPicture: originData.customerPost.post.postPicture.map((picture) => {
      return picture.picture.data;
    }),
    addedPicture,
    deletedPicture,
    setRate,
    setBody,
    setAddedPicture,
    setDeletedPicture,
    updatePost,
  };
};

export default useUpdatePost;
