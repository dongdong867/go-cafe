'use client';

type Props = {
  topLabelText: string;
  sideLabel: React.ReactNode;
  type?: string;
  value?: string;
  disabled?: boolean;
  pass?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputModal = ({
  topLabelText,
  sideLabel,
  type = 'text',
  value = '',
  disabled = false,
  pass = true,
  setValue,
}: Props) => {
  const bgColor = pass ? 'bg-primary' : 'bg-error';
  const borderColor = pass ? 'border-primary' : 'border-error';
  const textColor = pass ? '' : 'text-error';

  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className={`${textColor} label-text font-semibold `}>
            {topLabelText}
          </span>
        </label>
        <label className="input-group">
          <span className={`${bgColor} text-white font-semibold`}>
            {sideLabel}
          </span>
          <input
            type={type}
            disabled={disabled}
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
            className={`input input-bordered ${borderColor} border-2 w-full focus:outline-none`}
          />
        </label>
      </div>
    </>
  );
};

export default InputModal;
