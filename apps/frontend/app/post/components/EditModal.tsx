'use client';

import EditPicture from './EditModal/EditPicture';
import EditCoffeeShop from './EditModal/EditCoffeeShop';
import EditRanking from './EditModal/EditRanking';
import EditBody from './EditModal/EditBody';

const EditModal = () => {
  const buttonContent = 'Post';

  return (
    <>
      <div className="w-full max-w-lg h-[calc(100vh-64px)] max-[450px]:max-w-[350px] m-auto overflow-scroll">
        <div className=" text-base space-y-4">
          <div className="space-y-4">
            <EditPicture />
            <EditCoffeeShop />
            <EditRanking />
          </div>
          <div>
            <EditBody />
          </div>
        </div>
        <div className="w-full sticky bottom-0 bg-base-100 py-4">
          <button className="btn btn-block btn-primary text-xl text-base-100">
            {buttonContent}
          </button>
        </div>
      </div>
    </>
  );
};

export default EditModal;
