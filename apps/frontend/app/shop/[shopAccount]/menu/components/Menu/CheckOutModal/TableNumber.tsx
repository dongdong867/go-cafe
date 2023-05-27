'use client';

import InputModal from '@/components/Input/InputModal';

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
        <InputModal
          topLabelText="Table Number"
          sideLabel={<div>No.</div>}
          disabled={takeaway}
          setValue={setTableNumber}
        />
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
