type Props = {
  labelText: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const InputModal = ({ labelText, setInput }: Props) => {
  return (
    <>
      <div>
        <label className="label">
          <span className="max-[450px]:label-text text-lg">{labelText}</span>
        </label>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="input input-bordered input-primary w-full rounded-xl text-xl focus:outline-none"
        />
      </div>
    </>
  );
};

export default InputModal;
