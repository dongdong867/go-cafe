import ShopRatingModal from "@/app/components/ShopRatingModal";

type Props = {
  rating: Rating;
};

const UserShopRating = ({ rating }: Props) => {
  return (
    <>
      <div className="text-2xl font-bold mt-4">Rating</div>
      <div className="shadow-basic flex flex-col font-semibold mt-2 px-4 py-8 max-[450px]:py-4 rounded-box">
        <div className="w-11/12 max-[450px]:w-full m-auto space-y-4 max-[450px]:space-y-2">
          <ShopRatingModal rateName="General" rateValue={rating.general} />
          <ShopRatingModal
            rateName="Environment"
            rateValue={rating.environment}
          />
          <ShopRatingModal rateName="Meals" rateValue={rating.meals} />
          <ShopRatingModal rateName="Attitude" rateValue={rating.attitude} />
        </div>
      </div>
    </>
  );
};

export default UserShopRating;
