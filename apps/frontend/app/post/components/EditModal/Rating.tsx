'use client';

import RatingModal from '@/components/RatingModal';

type Props = {
  rating: Rating;
  setRate: (rateName: string, rateValue: number) => void;
};

const EditRating = ({ rating, setRate }: Props) => {
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
            rateName="general"
            rateValue={rating.general}
            setRate={setRate}
          />

          <RatingModal
            editable
            rateName="environment"
            rateValue={rating.environment}
            setRate={setRate}
          />

          <RatingModal
            editable
            rateName="meals"
            rateValue={rating.meals}
            setRate={setRate}
          />

          <RatingModal
            editable
            rateName="attitude"
            rateValue={rating.attitude}
            setRate={setRate}
          />
        </div>
      </div>
    </>
  );
};

export default EditRating;
