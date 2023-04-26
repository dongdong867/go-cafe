'use client';

import { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import InputModal from 'apps/frontend/app/components/Input/InputModal';
import { IoMdUnlock } from 'react-icons/io';
import { MdFingerprint } from 'react-icons/md';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ setSignin }: Props) => {
  const router = useRouter();

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const bodyContent = (
    <div className="space-y-4">
      <div className="text-5xl max-[450px]:text-4xl font-bold mx-10">
        Sign in
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
              onClick={() => setSignin(false)}
              className="link link-primary underline-offset-4"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const onSubmit = () => {
    if (account === 'account' && password === 'password') {
      router.replace('/');
    } else {
      throw new Error('Login Error');
    }
  };

  return (
    <>
      <Modal buttonContent="Sign in" onSubmit={onSubmit}>
        {bodyContent}
      </Modal>
    </>
  );
};

export default LoginModal;
