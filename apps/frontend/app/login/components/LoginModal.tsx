'use client';

import Modal from './Modal';
import { useRouter } from 'next/navigation';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ setSignin }: Props) => {
  const router = useRouter();

  const signinBody = (
    <>
      <div>Don't have a account?</div>
      <button
        onClick={() => setSignin(false)}
        className="link link-primary underline-offset-4"
      >
        Sign up
      </button>
    </>
  );

  const onSubmit = (account: string, password: string) => {
    if (account === 'account' && password === 'password') {
      router.replace('/');
    } else {
      throw new Error('Login Error');
    }
  };

  return (
    <>
      <Modal
        title="Sign in"
        disable={false}
        onSubmit={onSubmit}
        switchContent={signinBody}
      />
    </>
  );
};

export default LoginModal;
