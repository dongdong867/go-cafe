type Props = {
  children: React.ReactElement;
  onClick: () => void;
};

const BottomButton = ({ children, onClick }: Props) => {
  return (
    <>
      <div className="fixed w-full bg-base-100 left-0 bottom-0 z-50">
        <div className="w-11/12 max-w-lg m-auto py-4">
          <button
            onClick={onClick}
            className="btn btn-primary btn-block text-white text-xl"
          >
            {children}
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomButton;
