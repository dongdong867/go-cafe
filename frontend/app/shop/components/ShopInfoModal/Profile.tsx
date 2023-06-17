import Link from "next/link";

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
        <div className="font-semibold space-y-2">
          <div className="text-base">
            <div className="flex space-x-1">
              <div>Tel: </div>
              <Link
                href={`tel:${data.user.phone}`}
                className="text-primary-focus underline underline-offset-2"
              >
                {data.user.phone}
              </Link>
            </div>
            <div className="space-x-1">
              <div>Info: </div>
              <div className=" whitespace-pre-line">{data.info}</div>
            </div>
            <div className="mt-4">
              <div>Address: </div>
              <div className="flex gap-x-1 flex-wrap">
                <Link
                  href={`https://www.google.com/maps/place/${data.address}`}
                  className="text-primary-focus underline underline-offset-2"
                >
                  {data.address}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProfile;
