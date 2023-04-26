import InputModal from '../InputModal';
import Modal from '../Modal';

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
          <InputModal labelText="NAME" setInput={setName} />
          <InputModal labelText="EMAIL" setInput={setEmail} />
          <InputModal labelText="PHONE" setInput={setPhone} />
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
