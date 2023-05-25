'use client';

type Props = {
  rateName: string;
  rate?: number;
  setRate: (rateName: string, rateValue: number) => void;
};

const EditableRatingModal = ({ rateName, rate = 5, setRate }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setRate(rateName, parseInt(e.currentTarget.value));
  };

  return (
    <>
      <div className="w-2/3 max-[450px]:w-11/12 flex justify-between">
        <div>{rateName}</div>
        <form className="rating">
          <input
            value={1}
            type="radio"
            name={rateName}
            defaultChecked={rate === 1}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={2}
            type="radio"
            name={rateName}
            defaultChecked={rate === 2}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={3}
            type="radio"
            name={rateName}
            defaultChecked={rate === 3}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={4}
            type="radio"
            name={rateName}
            defaultChecked={rate === 4}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
          <input
            value={5}
            type="radio"
            name={rateName}
            defaultChecked={rate === 5}
            onClick={(e) => handleClick(e)}
            className="mask mask-star-2 bg-accent"
          />
        </form>
      </div>
    </>
  );
};

export default EditableRatingModal;
