import { useState } from "react";

const useRating = (initRating?: Rating) => {
  if (initRating === undefined) {
    initRating = {
      general: 5,
      environment: 5,
      meals: 5,
      attitude: 5,
    };
  }
  const [rating, setRating] = useState(initRating);

  const setRate = (rateName: string, rateValue: number) => {
    setRating({ ...rating, [rateName]: rateValue });
  };

  return { rating, setRating, setRate };
};

export default useRating;
