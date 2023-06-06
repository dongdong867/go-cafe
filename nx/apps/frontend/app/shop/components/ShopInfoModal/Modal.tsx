import ShopInfoButton from './Button';
import ShopProfile from './Profile';
import ShopRates from './Rates';

type Props = {
  data: Shop;
};

const ShopInfoModal = ({ data }: Props) => {
  return (
    <>
      <ShopProfile data={data} />
      <ShopInfoButton />
      <ShopRates rating={data.storeRating.rating} />
    </>
  );
};

export default ShopInfoModal;
