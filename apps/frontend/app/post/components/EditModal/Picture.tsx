'use client';

import { HiPencilAlt } from 'react-icons/hi';

const EditPicture = () => {
  return (
    <>
      <div
        className="
          w-full h-[384px] 
          max-[450px]:h-[270px] 
          rounded-xl 
          bg-base-100
          flex 
          justify-center 
          place-items-center
          border-2 border-primary
          "
      >
        <div className="btn btn-primary text-white text-lg font-medium flex place-items-center gap-x-1">
          <HiPencilAlt />
          <button onClick={() => {}}>Add picture</button>
        </div>
      </div>
    </>
  );
};

export default EditPicture;
