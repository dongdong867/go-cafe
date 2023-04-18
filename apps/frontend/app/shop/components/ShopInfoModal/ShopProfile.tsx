type Props = {
  data: ShopInfoForUser;
};

const ShopProfile = ({ data }: Props) => {
  return (
    <>
      <div className="bg-base-100 p-4 rounded-xl">
        <div className="card-title text-2xl font-bold">{data.name}</div>
        <div className="font-medium space-y-2">
          <div className="text-base">
            <div className="flex">
              <div>Tel: </div>
              <div>{data.telephone}</div>
            </div>
            <div className="flex">
              <div>Opening time: </div>
              <div>{data.openingTime}</div>
            </div>
          </div>
          <div className="text-sm">
            <div>Address: </div>
            <div className="flex gap-x-1 flex-wrap">
              <div className="shrink-0">{data.address.city} City</div>
              <div className="shrink-0">{data.address.area} Area</div>
              <div className="shrink-0">{data.address.road} Road</div>
              {data.address.other && (
                <div className="shrink-0">{data.address.other}</div>
              )}
              <div className="shrink-0">No. {data.address.houseNumber}</div>
              {data.address.building && (
                <div className="shrink-0">
                  -{data.address.building.subHouseNumber}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProfile;
