'use client';

type Props = {
  rateName: string;
  rateValue: number;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
};

const RatingModal = ({ rateName, rateValue, setRating = () => {} }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setRating(parseInt((e.target as HTMLInputElement).value));
  };

  return (
    <>
      <div className="w-2/3 max-[450px]:w-full flex justify-between">
        <div>{rateName}</div>
        <form className="rating">
          <input
            onClick={(e) => handleClick(e)}
            value={1}
            type="radio"
            name={rateName}
            checked={rateValue === 1}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={2}
            type="radio"
            name={rateName}
            checked={rateValue === 2}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={3}
            type="radio"
            name={rateName}
            checked={rateValue === 3}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={4}
            type="radio"
            name={rateName}
            checked={rateValue === 4}
            className="mask mask-star-2 bg-accent"
          />
          <input
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
