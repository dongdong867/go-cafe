'use client';

import PageTitle from 'apps/frontend/app/components/PageTitle';
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
      <div className="card w-full bg-base-100 font-medium flex-none border-2 border-primary">
        <div className="w-full px-8 pt-6">
          <div className="text-2xl font-bold">Rating</div>
          <div className="divider" />
        </div>
        <div className="card-body p-8 pt-0 place-items-center">
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
