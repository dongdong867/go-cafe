//components
import Image from 'next/image';

//images
import TemporaryImage from 'apps/frontend/public/images/logo.png';

//icons
import { FaStar } from 'react-icons/fa';

type Props = {
  data: PostModalData;
};

const Post = ({ data }: Props) => {
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

            <div className="collapse-title">
              {/* stars */}
              <div className="flex items-center gap-x-1 text-base">
                <FaStar className="text-accent" />
                <div className="font-semibold">
                  {data.generalStars.toFixed(1)}
                </div>
              </div>

              {/* post title */}
              <div className="card-title text-xl font-bold">
                {data.user.userName} @{data.coffeeShop.coffeeShopName}
              </div>
            </div>

            {/* post body */}
            <div className="collapse-content font-medium">{data.body}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
