'use client';

type Props = {
  tableNumber: string;
  takeaway: boolean;
  setTableNumber: React.Dispatch<React.SetStateAction<string>>;
  setTakeaway: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckOutTableNumber = ({
  tableNumber,
  takeaway,
  setTableNumber,
  setTakeaway,
}: Props) => {
  return (
    <>
      <div className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Table Number</span>
          </label>
          <label className="input-group">
            <span className="bg-primary text-white font-semibold">No.</span>
            <input
              type="text"
              disabled={takeaway === true}
              onChange={(e) => setTableNumber(e.target.value)}
              className="input input-bordered border-primary w-full focus:outline-none"
            />
          </label>
        </div>
        <div className="form-control w-max">
          <label className="label cursor-pointer space-x-4">
            <input
              type="checkbox"
              disabled={tableNumber !== ''}
              onChange={(e) => setTakeaway(e.target.checked)}
              className="checkbox checkbox-primary"
            />
            <span className="label-text text-base font-bold">Takeaway</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default CheckOutTableNumber;
