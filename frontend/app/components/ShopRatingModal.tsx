type Props = {
  rateName: string;
  rateValue: number;
};

const ShopRatingModal = ({ rateName, rateValue }: Props) => {
  return (
    <>
      <div className="w-11/12 min-[450px]:flex justify-between place-items-center space-x-2">
        <div className="w-1/3 max-[450px]:w-full">{rateName}</div>
        <div className="w-full m-auto flex justify-around place-items-center space-x-2 max-[450px]:w-full">
          <progress
            value={rateValue}
            max={5}
            className="progress progress-accent w-full max-[450px]:w-3/4 shrink"
          />
          <div className="w-max flex-none">{rateValue.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default ShopRatingModal;
