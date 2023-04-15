import { MdLocationOn } from 'react-icons/md';

const EditCoffeeShop = () => {
  return (
    <>
      <div className="flex-none">
        <label className="input-group">
          <span>
            <MdLocationOn className="text-2xl" />
          </span>
          <input
            type="text"
            placeholder="choose a coffee shop"
            className="input input-bordered w-full focus:outline-none"
          />
        </label>
      </div>
    </>
  );
};

export default EditCoffeeShop;
