'use client';

import { useState } from 'react';

type Props = {
  rateName: string;
  rateValue: number;
  disable?: boolean;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
};

const RatingModal = ({
  rateName,
  rateValue,
  disable = false,
  setRating = () => {},
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setRating(parseInt((e.target as HTMLInputElement).value));
  };
  return (
    <>
      <div className="w-1/2 max-[450px]:w-5/6 flex justify-between">
        <div>{rateName}</div>
        <form className="rating">
          <input
            // disabled={disable}
            onClick={(e) => handleClick(e)}
            value={1}
            type="radio"
            name={rateName}
            checked={rateValue === 1}
            className="mask mask-star-2 bg-accent"
          />
          <input
            // disabled={disable}
            onClick={(e) => handleClick(e)}
            value={2}
            type="radio"
            name={rateName}
            checked={rateValue === 2}
            className="mask mask-star-2 bg-accent"
          />
          <input
            // disabled={disable}
            onClick={(e) => handleClick(e)}
            value={3}
            type="radio"
            name={rateName}
            checked={rateValue === 3}
            className="mask mask-star-2 bg-accent"
          />
          <input
            // disabled={disable}
            onClick={(e) => handleClick(e)}
            value={4}
            type="radio"
            name={rateName}
            checked={rateValue === 4}
            className="mask mask-star-2 bg-accent"
          />
          <input
            // disabled={disable}
            onClick={(e) => handleClick(e)}
            value={5}
            type="radio"
            name={rateName}
            checked={rateValue === 5}
            className="mask mask-star-2 bg-accent"
          />
        </form>
      </div>
    </>
  );
};

export default RatingModal;
