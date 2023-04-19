'use client';

import { useState } from 'react';
import Modal from '../Modal';
import { useRouter } from 'next/navigation';
import InputModal from '../InputModal';

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
  const router = useRouter();

  const bodyContent = (
    <div className="space-y-4">
      <div className="text-5xl max-[450px]:text-4xl font-bold mx-10">
        Sign up
      </div>
      <div className=" grow mx-10 text-xl space-y-10 font-medium">
        <div>
          <InputModal labelText="ACCOUNT" setInput={setAccount} />
          <InputModal labelText="PASSWORD" setInput={setPassword} />
          <div className="flex gap-x-2 mt-2 text-base">
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
