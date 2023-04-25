'use client';

import { useState } from 'react';
import CommodityOrderModal from './CommodityOrderModal';

type Props = {
  item: {
    name: string;
    price: number;
  };
};

const CommodityModal = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <li>
        <label htmlFor={item.name} className="text-xl font-bold">
          {item.name}
          <input
            type="checkbox"
            id={item.name}
            onChange={() => setQuantity(1)}
            className="modal-toggle"
          />
          <CommodityOrderModal
            quantity={quantity}
            setQuantity={setQuantity}
            item={item}
          />
        </label>
      </li>
    </>
  );
};

export default CommodityModal;
