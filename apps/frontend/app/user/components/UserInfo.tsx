import Image from 'next/image';

import TemporaryImage from 'apps/frontend/public/images/logo.png';
const UserInfo = () => {
  return (
    <>
      <div className="w-full flex justify-around place-items-center pt-5">
        <div className="avatar">
          <div className="w-40 h-40 rounded-full">
            <Image
              src={TemporaryImage}
              alt=""
              className="w-14 h-auto aspect-square"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-bold">User Name</div>
          <div className="flex text-xl font-medium">
            <div>
              <div>Posts</div>
              <div>123</div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div>
              <div>Following</div>
              <div>12345</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
