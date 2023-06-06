import { FaStore } from "react-icons/fa";
import InputModal from "../Input/InputModal";
import PageTitle from "../PageTitle";
import RegisterBasicInfo from "./BasicInfo";
import TextArea from "../Input/TextArea";
import BottomButton from "../Button/BottomButton";

type Props = {
  avatar: File;
  avatarUrl?: string;
  name: string;
  phone: string;
  address: string;
  info: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
  setOriginAvatar?: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  buttonActionText: string;
  handleEdit: () => Promise<void>;
};

const EditShopInfoModal = ({
  avatar,
  avatarUrl,
  name,
  phone,
  address,
  info,
  setName,
  setPhone,
  setAvatar,
  setOriginAvatar,
  setAddress,
  setInfo,
  buttonActionText,
  handleEdit,
}: Props) => {
  return (
    <div className="w-full max-w-lg m-auto max-[450px]:max-w-[350px] ">
      <PageTitle title="Set Information" />
      <RegisterBasicInfo
        avatar={avatar}
        avatarUrl={avatarUrl}
        name={name}
        phone={phone}
        setName={setName}
        setPhone={setPhone}
        setAvatar={setAvatar}
        setOriginAvatar={setOriginAvatar}
      />
      <InputModal
        topLabelText="ADDRESS"
        sideLabel={<FaStore />}
        value={address}
        setValue={setAddress}
      />
      <div className="text-sm font-semibold ml-1 my-2">INFO</div>
      <TextArea postBody={info} setPostBody={setInfo} />
      <div className="w-full h-24" />
      <BottomButton onClick={handleEdit}>
        <span>{buttonActionText}</span>
      </BottomButton>
    </div>
  );
};

export default EditShopInfoModal;
