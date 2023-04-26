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
          bg-base-300 
          flex 
          justify-center 
          place-items-center"
      >
        <div className="btn btn-active btn-ghost text-lg font-medium flex place-items-center gap-x-1">
          <HiPencilAlt />
          <button onClick={() => {}}>Add picture</button>
        </div>
      </div>
    </>
  );
};

export default EditPicture;
