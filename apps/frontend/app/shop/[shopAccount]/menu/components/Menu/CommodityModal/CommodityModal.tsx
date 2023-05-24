'use client';

import { useState } from 'react';
import CommodityOrderModal from './CommodityOrderModal';

type Props = {
  dish: {
    name: string;
    price: number;
  };
};

const CommodityModal = ({ dish }: Props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <li>
        <label htmlFor={dish.name} className="text-xl font-bold">
          {dish.name}
          <input
            type="checkbox"
            id={dish.name}
            onChange={() => setQuantity(1)}
            className="modal-toggle"
          />
          <CommodityOrderModal
            quantity={quantity}
            setQuantity={setQuantity}
            dish={dish}
          />
        </label>
      </li>
    </>
  );
};

export default CommodityModal;
