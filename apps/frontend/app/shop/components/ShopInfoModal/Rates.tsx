import ShopRatingModal from '@/components/ShopRatingModal';

type Props = {
  rating: Rating;
};

const ShopRates = ({ rating }: Props) => {
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
        <ShopRatingModal rateName="general" rateValue={rating.general} />
        <ShopRatingModal
          rateName="environment"
          rateValue={rating.environment}
        />
        <ShopRatingModal rateName="meals" rateValue={rating.meals} />
        <ShopRatingModal rateName="attitude" rateValue={rating.attitude} />
      </div>
    </>
  );
};

export default ShopRates;
