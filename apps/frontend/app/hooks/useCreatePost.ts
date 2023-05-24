import { useEffect, useState } from 'react';
import useRating from './useRating';
import { gql, useMutation } from '@apollo/client';
import useToast from './useToast';

const CREATE_POST = gql`
  mutation CreateCustomerPost(
    $createCustomerPostInput: CreateCustomerPostInput!
  ) {
    createCustomerPost(createCustomerPostInput: $createCustomerPostInput)
  }
`;

const useCreatePost = () => {
  const [shopAccount, setShopAccount] = useState('');
  const [body, setBody] = useState('');

  const { rating, setRate } = useRating();

  const [createCustomerPost, { data, error }] = useMutation(CREATE_POST);

  if (error) {
    useToast(error.message, 'error');
  }

  const createPost = async () => {
    await createCustomerPost({
      variables: {
        createCustomerPostInput: {
          body: body,
          pictures: ['picture1', 'picture2'],
          rating: rating,
          storeAccount: shopAccount,
        },
      },
    });
  };

  return { shopAccount, setShopAccount, setRate, setBody, createPost };
};

export default useCreatePost;
