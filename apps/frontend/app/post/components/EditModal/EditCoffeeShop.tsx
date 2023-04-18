'use client';

import { MdLocationOn } from 'react-icons/md';

const EditCoffeeShop = () => {
  return (
    <>
      <div className="input-group">
        <span>
          <MdLocationOn className="text-2xl" />
        </span>
        <input
          type="text"
          placeholder="select a coffee shop"
          className="input input-bordered w-full text-lg focus:outline-none"
        />
      </div>
    </>
  );
};

export default EditCoffeeShop;
