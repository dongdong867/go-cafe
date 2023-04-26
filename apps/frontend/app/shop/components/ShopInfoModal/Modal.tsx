import ShopInfoButton from './Button';
import ShopProfile from './Profile';
import ShopRate from './Rate';

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
