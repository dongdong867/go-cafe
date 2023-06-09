"use client";

type Props = {
  topLabelText: string;
  sideLabel: React.ReactNode;
  type?: "text" | "number" | "password";
  value?: string;
  numberValue?: number;
  disabled?: boolean;
  pass?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  setNumberValue?: React.Dispatch<React.SetStateAction<number>>;
};

const InputModal = ({
  topLabelText,
  sideLabel,
  type = "text",
  value,
  numberValue,
  disabled = false,
  pass = true,
  setValue = () => {},
  setNumberValue = () => {},
}: Props) => {
  const bgColor = pass ? "bg-primary" : "bg-error";
  const borderColor = pass ? "border-primary" : "border-error";
  const textColor = pass ? "" : "text-error";

  const handleType = type === "text" || type === "password";

  const input = () => {
    if (disabled) {
      return (
        <input
          type={type}
          disabled
          defaultValue={value}
          className={`input input-bordered ${borderColor} join-item rounded-r-full border-2 w-full focus:outline-none`}
        />
      );
    } else {
      return (
        <>
          {handleType ? (
            <input
              type={type}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`input input-bordered ${borderColor} join-item rounded-r-full border-2 w-full font-medium focus:outline-none`}
            />
          ) : (
            <input
              type={type}
              value={numberValue}
              onChange={(e) => setNumberValue(parseInt(e.currentTarget.value))}
              className={`input input-bordered ${borderColor} join-item rounded-r-full border-2 w-full font-medium focus:outline-none`}
            />
          )}
        </>
      );
    }
  };

  return (
    <>
      <label className="label">
        <span className={`${textColor} label-text font-semibold `}>
          {topLabelText}
        </span>
      </label>
      <div className="join flex">
        <div
          className={`w-14 ${bgColor} text-xl join-item rounded-l-full flex justify-center place-items-center text-white font-semibold`}
        >
          {sideLabel}
        </div>
        {input()}
      </div>
    </>
  );
};

export default InputModal;
