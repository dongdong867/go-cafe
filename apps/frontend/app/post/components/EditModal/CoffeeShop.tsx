'use client';

import { MdLocationOn } from 'react-icons/md';

type Props = {
  disabled: boolean;
  shopName: string;
  setShopName: React.Dispatch<React.SetStateAction<string>>;
};

const EditCoffeeShop = ({ disabled, shopName, setShopName }) => {
  return (
    <>
      <div className="input-group">
        <span>
          <MdLocationOn className="text-2xl" />
        </span>
        <input
          disabled={disabled}
          type="text"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          placeholder="select a coffee shop"
          className="input input-bordered w-full text-lg focus:outline-none"
        />
      </div>
    </>
  );
};

export default EditCoffeeShop;
