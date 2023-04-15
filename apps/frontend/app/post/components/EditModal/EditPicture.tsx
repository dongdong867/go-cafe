import { HiPencilAlt } from 'react-icons/hi';

const EditPicture = () => {
  return (
    <>
      <div className="w-full h-[384px] max-[450px]:h-[270px] rounded-xl bg-base-300 flex justify-center place-items-center">
        <button className="btn btn-active btn-ghost">
          <div className="flex place-items-center gap-x-1">
            <HiPencilAlt />
            <div>Add picture</div>
          </div>
        </button>
      </div>
    </>
  );
};

export default EditPicture;
