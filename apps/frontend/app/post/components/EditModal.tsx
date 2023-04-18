'use client';

import EditPicture from './EditModal/EditPicture';
import EditCoffeeShop from './EditModal/EditCoffeeShop';
import EditRanking from './EditModal/EditRanking';
import EditBody from './EditModal/EditBody';

type Props = {
  buttonContent: string;
};

const EditModal = ({ buttonContent }: Props) => {
  return (
    <>
      <div className="text-lg font-medium space-y-4">
        <EditPicture />
        <EditCoffeeShop />
        <EditRanking />
        <EditBody />
      </div>
      <div className="w-full sticky bottom-0 bg-base-100 py-4">
        <button
          onClick={() => {}}
          className="btn btn-block btn-primary text-xl text-base-100"
        >
          {buttonContent}
        </button>
      </div>
    </>
  );
};

export default EditModal;
