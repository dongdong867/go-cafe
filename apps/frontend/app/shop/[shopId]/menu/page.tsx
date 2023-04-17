import TemporaryPicture from 'apps/frontend/public/images/logo.png';
import Image from 'next/image';

const ShopMenuPage = () => {
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto space-y-4">
        <div className="text-3xl font-bold">Menu</div>
        <div className="divider"></div>
        <div className="carousel rounded-box">
          <div className="carousel-item w-full">
            <Image
              src={TemporaryPicture}
              alt=""
              className="w-full h-max aspect-auto"
            />
          </div>
          <div className="carousel-item w-full aspect-auto">
            <Image
              src={TemporaryPicture}
              alt=""
              className="w-full h-max aspect-auto"
            />
          </div>
          <div className="carousel-item w-full">
            <Image
              src={TemporaryPicture}
              alt=""
              className="w-full h-max aspect-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopMenuPage;
