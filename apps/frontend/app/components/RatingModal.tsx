'use client';

type Props = {
  rateName: string;
  rateValue: number;
  editable?: boolean;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
};

const RatingModal = ({
  rateName,
  rateValue,
  editable = false,
  setRating = () => {},
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setRating(parseInt((e.target as HTMLInputElement).value));
  };

  return (
    <>
      <div className="w-2/3 max-[450px]:w-5/6 flex justify-between">
        <div>{rateName}</div>
        <form className="rating">
          <input
            value={1}
            type="radio"
            name={rateName}
            disabled={!editable}
            defaultChecked={rateValue === 1}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={2}
            type="radio"
            name={rateName}
            disabled={!editable}
            defaultChecked={rateValue === 2}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={3}
            type="radio"
            name={rateName}
            disabled={!editable}
            defaultChecked={rateValue === 3}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={4}
            type="radio"
            name={rateName}
            disabled={!editable}
            defaultChecked={rateValue === 4}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={5}
            type="radio"
            name={rateName}
            disabled={!editable}
            defaultChecked={rateValue === 5}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
        </form>
      </div>
    </>
  );
};

export default RatingModal;
