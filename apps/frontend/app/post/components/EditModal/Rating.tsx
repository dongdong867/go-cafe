'use client';

import EditableRatingModal from '@/components/EditableRatingModal';

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
          <EditableRatingModal rateName="general" setRate={setRate} />
          <EditableRatingModal rateName="environment" setRate={setRate} />
          <EditableRatingModal rateName="meals" setRate={setRate} />
          <EditableRatingModal rateName="attitude" setRate={setRate} />
        </div>
      </div>
    </>
  );
};

export default EditRating;
