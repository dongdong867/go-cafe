import { MdEmail } from "react-icons/md";
import InputModal from "../Input/InputModal";
import PageTitle from "../PageTitle";
import RegisterBasicInfo from "./BasicInfo";
import BottomButton from "../Button/BottomButton";

type Props = {
  avatar: File;
  avatarUrl?: string;
  name: string;
  phone: string;
  email: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
  setOriginAvatar?: React.Dispatch<React.SetStateAction<string>>;
  buttonActionText: string;
  handleEdit: () => Promise<void>;
};

const EditCustomerInfoModal = ({
  avatar,
  avatarUrl,
  name,
  phone,
  email,
  buttonActionText,
  setName,
  setEmail,
  setPhone,
  setOriginAvatar,
  setAvatar,
  handleEdit,
}: Props) => {
  return (
    <div className="w-full max-w-lg h-full m-auto max-[450px]:max-w-[350px] ">
      <PageTitle title="Set Information" />
      <RegisterBasicInfo
        avatar={avatar}
        avatarUrl={avatarUrl}
        name={name}
        phone={phone}
        setName={setName}
        setPhone={setPhone}
        setOriginAvatar={setOriginAvatar}
        setAvatar={setAvatar}
      />
      <InputModal
        topLabelText="EMAIL"
        sideLabel={<MdEmail />}
        value={email}
        setValue={setEmail}
      />
      <div className="w-full h-24" />
      <BottomButton onClick={handleEdit}>
        <span>{buttonActionText}</span>
      </BottomButton>
    </div>
  );
};

export default EditCustomerInfoModal;
