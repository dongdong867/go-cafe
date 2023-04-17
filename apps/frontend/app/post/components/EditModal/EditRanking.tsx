'use client';

import RatingModal from 'apps/frontend/app/components/RatingModal';
import { useState } from 'react';

const EditRanking = () => {
  const [generalRate, setGeneralRate] = useState(5);
  const [rate1, setRate1] = useState(5);
  const [rate2, setRate2] = useState(5);

  const handleClick = (e: any) => {
    setGeneralRate(e.target.value);
  };
  return (
    <>
      <div className="card bg-base-300 font-medium flex-none">
        <div className="card-body p-4 place-items-center">
          <RatingModal
            rateName="general"
            rateValue={generalRate}
            setRating={setGeneralRate}
          />
          <RatingModal
            rateName="rate 1"
            rateValue={rate1}
            setRating={setRate1}
          />
          <RatingModal
            rateName="rate 2"
            rateValue={rate2}
            setRating={setRate2}
          />
        </div>
      </div>
    </>
  );
};

export default EditRanking;
