'use client';

type Props = {
  rateName: string;
  rateValue: number;
};

const RatingModal = ({ rateName, rateValue }: Props) => {
  const backgroundList = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rateValue - 1) {
      backgroundList.push('bg-accent');
    } else {
      backgroundList.push('bg-base-300');
    }
  }
  return (
    <>
      <div className="w-2/3 max-[450px]:w-11/12 flex justify-between">
        <div>{rateName}</div>
        <div className="rating">
          <div className={`w-6 h-6 mask mask-star-2 ${backgroundList[0]}`} />
          <div className={`w-6 h-6 mask mask-star-2 ${backgroundList[1]}`} />
          <div className={`w-6 h-6 mask mask-star-2 ${backgroundList[2]}`} />
          <div className={`w-6 h-6 mask mask-star-2 ${backgroundList[3]}`} />
          <div className={`w-6 h-6 mask mask-star-2 ${backgroundList[4]}`} />
        </div>
      </div>
    </>
  );
};

export default RatingModal;
