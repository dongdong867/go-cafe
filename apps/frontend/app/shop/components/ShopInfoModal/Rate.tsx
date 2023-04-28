import RatingModal from '@/components/RatingModal';

type Props = {
  data: ShopInfoForUser;
};

const ShopRate = ({ data }: Props) => {
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
        <RatingModal rateName="general" rateValue={data.stars.generalStar} />
        <RatingModal
          rateName="environment"
          rateValue={data.stars.environment}
        />
        <RatingModal rateName="meals" rateValue={data.stars.meals} />
        <RatingModal rateName="attitude" rateValue={data.stars.attitude} />
      </div>
    </>
  );
};

export default ShopRate;
