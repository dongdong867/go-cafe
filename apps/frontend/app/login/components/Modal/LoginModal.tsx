'use client';

//components
import Modal from './Modal';
import InputModal from '@/components/Input/InputModal';

//hooks
import useLogin from '@/hooks/useLogin';

//icons
import { IoMdUnlock } from 'react-icons/io';
import { MdFingerprint } from 'react-icons/md';

type Props = {
  setSignin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ setSignin }: Props) => {
  const { setAccount, setPassword, error, login } = useLogin();

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

  return (
    <>
      <Modal buttonContent="Sign in" onSubmit={login}>
        {bodyContent}
      </Modal>
      {error !== null && (
        <div className="toast toast-center toast-top w-max top-16">
          <div className="alert alert-error shadow-[0_2px_15px_rgba(0,0,0,0.25)]">
            <span className="text-white font-semibold">{error}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
