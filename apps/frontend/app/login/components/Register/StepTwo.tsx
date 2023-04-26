import LoginInputModal from '../LoginInputModal';
import Modal from '../Modal/Modal';

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};

const RegisterStepTwo = ({ setName, setEmail, setPhone }) => {
  const bodyContent = (
    <>
      <div className="grow text-xl space-y-10 font-medium">
        <div className="mx-10">
          <LoginInputModal labelText="NAME" setInput={setName} />
          <LoginInputModal labelText="EMAIL" setInput={setEmail} />
          <LoginInputModal labelText="PHONE" setInput={setPhone} />
        </div>
      </div>
    </>
  );

  return (
    <>
      <Modal buttonContent="Register" onSubmit={() => {}}>
        {bodyContent}
      </Modal>
    </>
  );
};

export default RegisterStepTwo;
