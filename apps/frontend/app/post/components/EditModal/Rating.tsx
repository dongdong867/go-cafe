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

const EditRating = ({
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
            editable
            rateName="General"
            rateValue={generalRate}
            setRating={setGeneralRate}
          />

          <RatingModal
            editable
            rateName="Environment"
            rateValue={environmentRate}
            setRating={setEnvironmentRate}
          />

          <RatingModal
            editable
            rateName="Meals"
            rateValue={mealsRate}
            setRating={setMealsRate}
          />

          <RatingModal
            editable
            rateName="Attitude"
            rateValue={attitudeRate}
            setRating={setAttitudeRate}
          />
        </div>
      </div>
    </>
  );
};

export default EditRating;
