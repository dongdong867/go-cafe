import { useState } from 'react';
import useRating from './useRating';

const useCreatePost = () => {
  const [coffeeShop, setCoffeeShop] = useState('');
  const [body, setBody] = useState('');

  const { rating, setRate } = useRating();

  const create = () => {
    const post = {
      coffeeShop: coffeeShop,
      rating: rating,
      body: body,
    };

    console.log(post);
  };

  return { coffeeShop, setCoffeeShop, setRate, setBody, create };
};

export default useCreatePost;
