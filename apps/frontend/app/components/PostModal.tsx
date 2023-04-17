//components
import Image from 'next/image';

//images
import TemporaryImage from 'apps/frontend/public/images/logo.png';

type Props = {
  editable?: boolean;
  data: PostModalData;
  children: React.ReactNode;
  rates: React.ReactNode;
};

const PostModal = ({ editable = false, data, children, rates }: Props) => {
  return (
    <>
      <div
        className="
          card 
          w-full h-max
          max-w-lg max-[450px]:max-w-[360px] 
          border-2 
          bg-base-200 
          mb-4"
      >
        {/* TODO: images need to be replace */}
        <figure className="h-[384px] max-[450px]:h-[270px]">
          <div className="carousel bg-base-100">
            <div className="carousel-item w-full">
              <Image src={TemporaryImage} alt="" />
            </div>
            <div className="carousel-item w-full">
              <Image src={TemporaryImage} alt="" />
            </div>
            <div className="carousel-item w-full">
              <Image src={TemporaryImage} alt="" />
            </div>
          </div>
          {/* TODO: display image count function need to be handle */}
          <div className="badge badge-primary text-white absolute top-2 right-2">
            1/3
          </div>
        </figure>

        <div className="card-body px-2 py-0">
          <div className="collapse">
            <input type="checkbox" />

            {children}

            {/* post body */}
            <div className="collapse-content font-medium space-y-4">
              <div>{rates}</div>
              <div>{data.body}</div>
              {editable && (
                <div className="flex justify-end space-x-2">
                  <button className="btn btn-sm btn-primary text-base-100 rounded-xl">
                    Edit
                  </button>
                  <button className="btn btn-sm btn-secondary rounded-xl">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostModal;
