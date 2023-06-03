import InputModal from '@/components/Input/InputModal';
import PageTitle from '@/components/PageTitle';
import { MdEmail } from 'react-icons/md';
import RegisterBasicInfo from './BasicInfo';
import BottomButton from '@/components/Button/BottomButton';

type Props = {
  avatar: File;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  registerCustomer: () => Promise<void>;
};

const RegisterCustomerInfo = ({
  avatar,
  setName,
  setEmail,
  setPhone,
  setAvatar,
  registerCustomer,
}: Props) => {
  return (
    <div className="w-full max-w-lg h-full m-auto max-[450px]:max-w-[350px] ">
      <PageTitle title="Set Information" />
      <RegisterBasicInfo
        avatar={avatar}
        setName={setName}
        setPhone={setPhone}
        setAvatar={setAvatar}
      />
      <InputModal
        topLabelText="EMAIL"
        sideLabel={<MdEmail />}
        setValue={setEmail}
      />
      <div className="w-full h-24" />
      <BottomButton onClick={registerCustomer}>
        <span>Create Account</span>
      </BottomButton>
    </div>
  );
};

export default RegisterCustomerInfo;
