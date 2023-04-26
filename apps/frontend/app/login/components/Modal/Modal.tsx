'use client';

//components
import Image from 'next/image';

//images
import Logo from 'apps/frontend/public/images/logo.png';

type Props = {
  buttonContent: string;
  onSubmit: () => void;
  children: React.ReactElement;
};

const Modal = ({ buttonContent, onSubmit, children }: Props) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <>
      <div className="w-full max-w-lg h-full m-auto flex justify-center place-items-center">
        <div
          className="
         card
         w-full h-full
         min-[450px]:w-11/12
         min-[450px]:max-h-[800px]
         max-[450px]:rounded-none
         shadow-[0_0_15px_rgba(0,0,0,0.4)]
         flex flex-col
         justify-start
         space-y-5
         "
        >
          <figure>
            <Image
              src={Logo}
              alt="logo"
              className="w-2/3 max-[450px]:w-1/2 h-auto mt-10 aspect-auto"
            />
          </figure>

          {children}

          <div className="w-11/12 absolute left-1/2 -translate-x-1/2 bottom-5">
            <button
              disabled={false}
              onClick={handleSubmit}
              className="btn btn-block btn-primary text-2xl text-white"
            >
              {buttonContent}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
