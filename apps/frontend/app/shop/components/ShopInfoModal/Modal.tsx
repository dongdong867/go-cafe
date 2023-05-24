import ShopInfoButton from './Button';
import ShopProfile from './Profile';
import ShopRate from './Rate';

type Props = {
  data: Shop;
};

const ShopInfoModal = ({ data }: Props) => {
  return (
    <>
      <ShopProfile data={data} />
      <ShopInfoButton />
      <ShopRate rating={data.storeRating.rating} />
    </>
  );
};

export default ShopInfoModal;
