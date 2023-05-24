import RatingModal from '@/components/RatingModal';

type Props = {
  rating: Rating;
};

const ShopRate = ({ rating }: Props) => {
  return (
    <>
      <div
        className="
          flex flex-col 
          items-center 
          bg-base-100 
          rounded-xl 
          py-4 
          space-y-2
          font-semibold"
      >
        <RatingModal rateName="general" rateValue={rating.general} />
        <RatingModal rateName="environment" rateValue={rating.environment} />
        <RatingModal rateName="meals" rateValue={rating.meals} />
        <RatingModal rateName="attitude" rateValue={rating.attitude} />
      </div>
    </>
  );
};

export default ShopRate;
