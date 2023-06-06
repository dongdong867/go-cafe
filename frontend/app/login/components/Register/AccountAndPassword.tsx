"use client";

import InputModal from "@/app/components/Input/InputModal";
import { IoMdUnlock } from "react-icons/io";
import { MdFingerprint } from "react-icons/md";
import Modal from "../Modal/Modal";

type Props = {
  accountPass: boolean;
  passwordPass: boolean;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsShop: React.Dispatch<React.SetStateAction<boolean>>;
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
};

const RegisterAccountAndPassword = ({
  accountPass,
  passwordPass,
  setAccount,
  setPassword,
  setIsShop,
  setSignin,
  handleNextStep,
}: Props) => {
  const bodyContent = (
    <div className="space-y-2">
      <div className="text-5xl max-[450px]:text-4xl font-bold mx-10">
        Sign up
      </div>
      <div className=" grow mx-10 text-xl space-y-10 font-medium">
        <div>
          <InputModal
            topLabelText="ACCOUNT"
            sideLabel={<MdFingerprint />}
            setValue={setAccount}
            pass={accountPass}
          />
          <InputModal
            type="password"
            topLabelText="PASSWORD"
            sideLabel={<IoMdUnlock />}
            setValue={setPassword}
            pass={passwordPass}
          />
          <div className="flex gap-x-2 mt-4 text-base place-items-center max-[450px]:mt-2">
            <input
              type="checkbox"
              id="role"
              onChange={(e) => setIsShop(e.target.checked)}
              className="checkbox checkbox-primary checkbox-xs"
            />
            <label htmlFor="role">
              <div>Register as a Shop.</div>
            </label>
          </div>
          <div className="flex gap-x-2 mt-1 text-base">
            <div>Don't have a account?</div>
            <button
              onClick={() => setSignin(true)}
              className="link link-primary underline-offset-4"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Modal buttonContent="Continue" onSubmit={handleNextStep}>
        {bodyContent}
      </Modal>
    </>
  );
};

export default RegisterAccountAndPassword;
