import { useState } from 'react';
import useRating from './useRating';

const useUpdatePost = (originPost: UserPost) => {
  const [body, setBody] = useState(originPost.body);

  const { rating, setRate } = useRating(originPost.rating);

  const update = () => {
    const post = {
      coffeeShop: originPost.coffeeShop,
      rating: rating,
      body: body,
    };

    console.log(post);
  };

  return { rating, setRate, setBody, update };
};

export default useUpdatePost;
