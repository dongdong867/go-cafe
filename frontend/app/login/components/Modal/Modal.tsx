"use client";

import Image from "next/image";
import Logo from "public/images/logo.png";
import { useState } from "react";

type Props = {
  buttonContent: string;
  onSubmit: () => Promise<void>;
  children: React.ReactElement;
};

const Modal = ({ buttonContent, onSubmit, children }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async () => {
    setDisabled(true);
    await onSubmit();
    setDisabled(false);
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
            justify-center
            pb-10
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
              disabled={disabled}
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
