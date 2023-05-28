import PageTitle from '@/components/PageTitle';
import RegisterBasicInfo from './BasicInfo';
import InputModal from '@/components/Input/InputModal';
import BottomButton from '@/components/Button/BottomButton';
import { FaStore } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';
import TextArea from '@/components/Input/TextArea';

type Props = {
  avatar: File;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  registerShop: () => Promise<void>;
};

const RegisterShopInfo = ({
  avatar,
  setName,
  setPhone,
  setAvatar,
  setAddress,
  setInfo,
  registerShop,
}: Props) => {
  return (
    <div className="w-full max-w-lg m-auto max-[450px]:max-w-[350px] ">
      <PageTitle title="Set Information" />
      <RegisterBasicInfo
        avatar={avatar}
        setName={setName}
        setPhone={setPhone}
        setAvatar={setAvatar}
      />
      <InputModal
        topLabelText="ADDRESS"
        sideLabel={<FaStore />}
        setValue={setAddress}
      />
      <div className="text-sm font-semibold ml-1 my-2">INFO</div>
      <TextArea postBody="" setPostBody={setInfo} />
      <div className="w-full h-24" />
      <BottomButton onClick={registerShop}>
        <span>Create Account</span>
      </BottomButton>
    </div>
  );
};

export default RegisterShopInfo;
