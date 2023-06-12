"use client";

import Image from "next/image";
import PageTitle from "../PageTitle";
import { HiPencilAlt } from "react-icons/hi";
import InputModal from "../Input/InputModal";
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

type Props = {
  avatar?: File;
  avatarUrl?: string;
  name: string;
  phone: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: React.Dispatch<React.SetStateAction<File>>;
  setOriginAvatar?: React.Dispatch<React.SetStateAction<string>>;
};

const RegisterBasicInfo = ({
  avatar,
  avatarUrl,
  name,
  phone,
  setName,
  setPhone,
  setAvatar,
  setOriginAvatar = () => {},
}: Props) => {
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
          {avatarUrl && (
            <div>
              <label htmlFor="avatar">
                <Image src={avatarUrl} alt="" width={1000} height={1000} />
                <input type="checkbox" id="avatar" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <PageTitle title="Sure to delete picture?" />
                    <div className="w-full flex justify-end">
                      <label
                        htmlFor="avatar"
                        onClick={() =>
                          setOriginAvatar(undefined as unknown as string)
                        }
                        className="w-max btn btn-primary text-white"
                      >
                        delete
                      </label>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          )}
          {!avatar && !avatarUrl && (
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
            onChange={(e) => setAvatar(e.target.files![0])}
            hidden
          />
        </div>
      </div>
      <InputModal
        topLabelText="NAME"
        sideLabel={<BsPersonFill />}
        value={name}
        setValue={setName}
      />
      <InputModal
        topLabelText="PHONE"
        sideLabel={<FaPhoneAlt />}
        value={phone}
        setValue={setPhone}
      />
    </>
  );
};

export default RegisterBasicInfo;
