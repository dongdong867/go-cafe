import InputModal from 'apps/frontend/app/components/Input/InputModal';
import Modal from '../Modal/Modal';
import { BsPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;

  register: () => void;
};

const RegisterStepTwo = ({ setName, setEmail, setPhone, register }: Props) => {
  const bodyContent = (
    <>
      <div className="grow text-xl space-y-10 font-medium">
        <div className="mx-10">
          <InputModal
            topLabelText="NAME"
            sideLabel={<BsPersonFill />}
            setValue={setName}
          />
          <InputModal
            topLabelText="EMAIL"
            sideLabel={<MdEmail />}
            setValue={setEmail}
          />
          <InputModal
            topLabelText="PHONE"
            sideLabel={<FaPhoneAlt />}
            setValue={setPhone}
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <Modal buttonContent="Register" onSubmit={register}>
        {bodyContent}
      </Modal>
    </>
  );
};

export default RegisterStepTwo;
