'use client';

import Modal from './Modal';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ setSignin }: Props) => {
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

  return (
    <>
      <Modal
        title="Sign in"
        disable={false}
        onSubmit={() => {}}
        switchContent={signinBody}
      />
    </>
  );
};

export default LoginModal;
