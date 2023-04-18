import ShopInfoButton from './ShopInfoModal/ShopInfoButton';
import ShopProfile from './ShopInfoModal/ShopProfile';
import ShopRate from './ShopInfoModal/ShopRate';

type Props = {
  data: ShopInfoForUser;
};

const ShopInfoModal = ({ data }: Props) => {
  return (
    <>
      <ShopProfile data={data} />
      <ShopInfoButton />
      <ShopRate data={data} />
    </>
  );
};

export default ShopInfoModal;
