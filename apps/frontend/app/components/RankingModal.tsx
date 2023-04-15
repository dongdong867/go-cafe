type Props = {
  rateName: string;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

const RankingModal = ({ rateName, setRating }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setRating(parseInt((e.target as HTMLInputElement).value));
  };
  return (
    <>
      <div className="w-1/2 max-[450px]:w-5/6 flex justify-between">
        <div>{rateName}</div>
        <div className="rating">
          <input
            onClick={(e) => handleClick(e)}
            value={1}
            type="radio"
            name={rateName}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={2}
            type="radio"
            name={rateName}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={3}
            type="radio"
            name={rateName}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={4}
            type="radio"
            name={rateName}
            className="mask mask-star-2 bg-accent"
          />
          <input
            onClick={(e) => handleClick(e)}
            value={5}
            type="radio"
            name={rateName}
            className="mask mask-star-2 bg-accent"
          />
        </div>
      </div>
    </>
  );
};

export default RankingModal;
