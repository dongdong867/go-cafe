import Image from 'next/image';

import TemporaryImage from '/public/images/logo.png';

type Props = {
  data: User;
};

const UserInfo = ({ data }: Props) => {
  return (
    <>
      <div className="w-full flex justify-around place-items-center pt-5">
        <div className="avatar">
          <div className="w-40 h-40 max-[450px]:w-24 max-[450px]:h-24 rounded-full">
            <Image
              src={TemporaryImage}
              alt=""
              className="w-full h-auto aspect-square"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-4xl max-[450px]:text-3xl font-bold">
            {data.user.name}
          </div>
          <div className="flex text-xl max-[450px]:text-lg font-medium">
            <div>
              <div>Posts</div>
              <div>{data.user.postCount}</div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div>
              <div>Following</div>
              <div>{data.followingCount}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
