type Props = {
  rateName: string;
  rateValue: number;
};

const ShopRatingModal = ({ rateName, rateValue }: Props) => {
  return (
    <>
      <div className="w-4/5 max-[450px]:w-11/12 flex justify-between place-items-center space-x-2">
        <div className="w-full">{rateName}</div>
        <div className="flex">
          <progress
            value={rateValue}
            max={5}
            className="progress progress-accent"
          />
          <div>{rateValue.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default ShopRatingModal;
