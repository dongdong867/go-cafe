'use client';

import { useState } from 'react';
import RegisterStepOne from '../Register/StepOne';
import RegisterStepTwo from '../Register/StepTwo';
import useRegister from 'apps/frontend/app/hooks/useRegister';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterModal = ({ setSignin }: Props) => {
  const [step, setStep] = useState(1);
  const { setAccount, setPassword, setName, setEmail, setPhone, register } =
    useRegister();

  return (
    <>
      {step === 1 && (
        <RegisterStepOne
          setAccount={setAccount}
          setPassword={setPassword}
          setStep={setStep}
          setSignin={setSignin}
        />
      )}
      {step === 2 && (
        <RegisterStepTwo
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          register={register}
        />
      )}
    </>
  );
};

export default RegisterModal;
