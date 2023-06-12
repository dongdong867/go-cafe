type GraphQLType = {
  user: {
    account: string;
    name: string;
    phone: string;
    postCount: number;
  };
  address: string;
  info: string;
  storeRating: {
    rating: {
      general: number;
      environment: number;
      meals: number;
      attitude: number;
    };
  };
};

type Props = {
  data: GraphQLType;
};

const ShopProfile = ({ data }: Props) => {
  return (
    <>
      <div className="bg-base-100 p-4 rounded-xl space-y-4">
        <div className="card-title text-2xl font-bold">{data.user.name}</div>
        <div className="font-medium space-y-2">
          <div className="text-base">
            <div className="flex space-x-1">
              <div>Tel: </div>
              <div className="font-semibold">{data.user.phone}</div>
            </div>
            <div className="space-x-1">
              <div>Info: </div>
              <div className="font-semibold whitespace-pre-line">
                {data.info}
              </div>
            </div>
            <div className="mt-4">
              <div>Address: </div>
              <div className="flex gap-x-1 flex-wrap font-semibold">
                <div className="shrink-0">{data.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProfile;
