'use client';

import EditPicture from './EditModal/EditPicture';
import EditCoffeeShop from './EditModal/EditCoffeeShop';
import EditRanking from './EditModal/EditRanking';
import EditBody from './EditModal/EditBody';

const EditModal = () => {
  const buttonContent = 'Post';

  return (
    <>
      <div className="w-full max-w-lg h-[calc(100%-64px)] max-[450px]:max-w-[350px] m-auto flex flex-col">
        <div className="h-[calc(100%-144px)] overflow-y-scroll grow flex flex-col text-base space-y-4">
          <div className="flex-none space-y-4">
            <EditPicture />
            <EditCoffeeShop />
            <EditRanking />
          </div>
          <div className="grow">
            <EditBody />
          </div>
        </div>
        <div className="w-full flex-none sticky bottom-0 bg-base-100 py-4">
          <button className="btn btn-block btn-primary text-xl text-base-100">
            {buttonContent}
          </button>
        </div>
      </div>
    </>
  );
};

export default EditModal;
