'use client';

type Props = {
  topLabelText: string;
  sideLabel: React.ReactNode;

  type?: string;
  disabled?: boolean;

  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputModal = ({
  topLabelText,
  sideLabel,
  type = 'text',
  disabled = false,
  value = '',
  setValue,
}: Props) => {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">{topLabelText}</span>
        </label>
        <label className="input-group">
          <span className="bg-primary text-white font-semibold">
            {sideLabel}
          </span>
          <input
            type={type}
            disabled={disabled}
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
            className="input input-bordered border-primary border-2 w-full focus:outline-none"
          />
        </label>
      </div>
    </>
  );
};

export default InputModal;
