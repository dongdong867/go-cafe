'use client';

import Modal from '../Modal/Modal';
import InputModal from 'apps/frontend/app/components/Input/InputModal';
import { IoMdUnlock } from 'react-icons/io';
import { MdFingerprint } from 'react-icons/md';

type Props = {
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterStepOne = ({
  setAccount,
  setPassword,
  setStep,
  setSignin,
}: Props) => {
  const bodyContent = (
    <div className="space-y-4">
      <div className="text-5xl max-[450px]:text-4xl font-bold mx-10">
        Sign up
      </div>
      <div className=" grow mx-10 text-xl space-y-10 font-medium">
        <div>
          <InputModal
            topLabelText="ACCOUNT"
            sideLabel={<MdFingerprint />}
            setValue={setAccount}
          />
          <InputModal
            type="password"
            topLabelText="PASSWORD"
            sideLabel={<IoMdUnlock />}
            setValue={setPassword}
          />
          <div className="flex gap-x-2 mt-4 text-base">
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

  const onSubmit = () => {
    setStep(2);
  };

  return (
    <>
      <Modal buttonContent="Continue" onSubmit={onSubmit}>
        {bodyContent}
      </Modal>
    </>
  );
};

export default RegisterStepOne;
