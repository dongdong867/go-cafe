'use client';

import InputModal from '@/components/Input/InputModal';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';
import { HiCurrencyDollar } from 'react-icons/hi';
import { MdOutlineImportContacts } from 'react-icons/md';

type Props = {
  dish: MenuDish;
  handleDishChange: (
    newDishName: string,
    price: number,
    setNewDishName: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  handleDelete: () => void;
};

const EditDishModal = ({ dish, handleDishChange, handleDelete }: Props) => {
  const [dishName, setDishName] = useState(dish.dishName);
  const [price, setPrice] = useState(dish.price);

  return (
    <label htmlFor={dish.dishName}>
      <div className="btn btn-ghost w-full">
        <div className="w-full text-left text-lg font-semibold">
          {dish.dishName}
        </div>
      </div>
      <input type="checkbox" id={dish.dishName} className="modal-toggle" />
      <div className="modal modal-middle max-[450px]:modal-bottom">
        <div className="modal-box">
          <PageTitle title="Edit Dish" />
          <InputModal
            topLabelText="DISH NAME"
            sideLabel={<MdOutlineImportContacts className="ml-2" />}
            value={dishName}
            setValue={setDishName}
          />
          <InputModal
            type="number"
            topLabelText="PRICE"
            sideLabel={<HiCurrencyDollar className="ml-2" />}
            numberValue={price}
            setNumberValue={setPrice}
          />
          <div className="modal-action">
            <label
              htmlFor={dish.dishName}
              onClick={() => {
                handleDishChange(dishName, price, setDishName, setPrice);
              }}
              className="btn btn-primary text-white"
            >
              Save
            </label>
            <label
              htmlFor={dish.dishName}
              onClick={handleDelete}
              className="btn btn-error text-white"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </label>
  );
};

export default EditDishModal;
