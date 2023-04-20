'use client';

import RatingModal from 'apps/frontend/app/components/RatingModal';

type Props = {
  generalRate: number;
  environmentRate: number;
  mealsRate: number;
  attitudeRate: number;
  setGeneralRate: React.Dispatch<React.SetStateAction<number>>;
  setEnvironmentRate: React.Dispatch<React.SetStateAction<number>>;
  setMealsRate: React.Dispatch<React.SetStateAction<number>>;
  setAttitudeRate: React.Dispatch<React.SetStateAction<number>>;
};

const EditRanking = ({
  generalRate,
  environmentRate,
  mealsRate,
  attitudeRate,
  setGeneralRate,
  setEnvironmentRate,
  setMealsRate,
  setAttitudeRate,
}: Props) => {
  return (
    <>
      <div className="card bg-base-300 font-medium flex-none">
        <div className="card-body p-8 place-items-center">
          <RatingModal
            rateName="General"
            rateValue={generalRate}
            setRating={setGeneralRate}
          />

          <RatingModal
            rateName="Environment"
            rateValue={environmentRate}
            setRating={setEnvironmentRate}
          />

          <RatingModal
            rateName="Meals"
            rateValue={mealsRate}
            setRating={setMealsRate}
          />

          <RatingModal
            rateName="Attitude"
            rateValue={attitudeRate}
            setRating={setAttitudeRate}
          />
        </div>
      </div>
    </>
  );
};

export default EditRanking;
