'use client';

import RankingModal from 'apps/frontend/app/components/RankingModal';
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
          <RankingModal rateName="general" setRating={setGeneralRate} />
          <RankingModal rateName="rate 1" setRating={setRate1} />
          <RankingModal rateName="rate 2" setRating={setRate2} />
        </div>
      </div>
    </>
  );
};

export default EditRanking;
