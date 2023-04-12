'use client';

import Modal from './Modal';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterModal = ({ setSignin }: Props) => {
  const signupBody = (
    <>
      <div>Have have a account?</div>
      <button
        onClick={() => setSignin(true)}
        className="text-[#78C2C4] underline-offset-4 hover:underline"
      >
        Sign in
      </button>
    </>
  );

  return (
    <>
      <Modal
        title="Sign up"
        disable={false}
        onSubmit={() => {}}
        switchContent={signupBody}
      />
    </>
  );
};

export default RegisterModal;
