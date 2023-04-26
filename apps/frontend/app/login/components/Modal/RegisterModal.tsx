'use client';

import { useState } from 'react';
import RegisterStepOne from '../Register/StepOne';
import RegisterStepTwo from '../Register/StepTwo';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterModal = ({ setSignin }: Props) => {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
        />
      )}
    </>
  );
};

export default RegisterModal;
