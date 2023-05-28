import InputModal from '@/components/Input/InputModal';
import { BsPersonFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import Image from 'next/image';

type Props = {
  avatar: File;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
};

const RegisterBasicInfo = ({ avatar, setName, setPhone, setAvatar }: Props) => {
  return (
    <>
      <div>
        <div className="text-sm font-semibold ml-1 mb-2">AVATAR</div>
        <div className="w-full h-[384px] border-2 border-primary rounded-box flex justify-center place-items-center overflow-clip max-[450px]:h-[270px] ">
          {avatar && (
            <Image
              src={URL.createObjectURL(avatar)}
              alt=""
              width={1000}
              height={1000}
            />
          )}
          {!avatar && (
            <label htmlFor="picture">
              <div className="w-max btn btn-primary text-white text-lg font-medium gap-x-2">
                <HiPencilAlt />
                <span>Add avatar</span>
              </div>
            </label>
          )}
          <input
            id="picture"
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            hidden
          />
        </div>
      </div>
      <InputModal
        topLabelText="NAME"
        sideLabel={<BsPersonFill />}
        setValue={setName}
      />
      <InputModal
        topLabelText="PHONE"
        sideLabel={<FaPhoneAlt />}
        setValue={setPhone}
      />
    </>
  );
};

export default RegisterBasicInfo;
