//components
import Image from 'next/image';

//images
import Logo from 'apps/frontend/public/images/logo.png';

type Props = {
  title: string;
  disable: boolean;
  onSubmit: () => void;
  switchContent: React.ReactNode;
};

const Modal = ({ title, disable, onSubmit, switchContent }: Props) => {
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
         space-y-5
         "
        >
          <figure>
            <Image
              src={Logo}
              alt="logo"
              className="w-2/3 max-[450px]:w-1/2 h-auto aspect-auto"
            />
          </figure>
          <div className="space-y-5">
            <div className="text-5xl max-[450px]:text-4xl font-bold mx-10">
              {title}
            </div>
            <div className=" grow mx-10 text-xl space-y-10 font-medium">
              <div>
                <div>
                  <label className="label">
                    <span className="max-[450px]:label-text text-lg">
                      ACCOUNT
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-primary w-full rounded-xl text-xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="max-[450px]:label-text text-lg">
                      PASSWORD
                    </span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered input-primary w-full rounded-xl text-xl focus:outline-none"
                  />
                </div>
                <div className="flex gap-x-2 mt-2 text-base">
                  {switchContent}
                </div>
              </div>
              <button
                disabled={disable}
                className="btn btn-block btn-primary text-2xl text-white"
              >
                {title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
