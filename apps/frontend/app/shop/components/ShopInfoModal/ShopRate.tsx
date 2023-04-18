import RatingModal from 'apps/frontend/app/components/RatingModal';

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
        <RatingModal rateName="rate1" rateValue={data.stars.starType1} />
        <RatingModal rateName="rate2" rateValue={data.stars.starType2} />
      </div>
    </>
  );
};

export default ShopRate;
