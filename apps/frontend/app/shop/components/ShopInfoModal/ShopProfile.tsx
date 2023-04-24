type Props = {
  data: ShopInfoForUser;
};

const ShopProfile = ({ data }: Props) => {
  return (
    <>
      <div className="bg-base-100 p-4 rounded-xl space-y-4">
        <div className="card-title text-2xl font-bold">{data.name}</div>
        <div className="font-medium space-y-2">
          <div className="text-base">
            <div className="flex space-x-1">
              <div>Tel: </div>
              <div className="font-semibold">{data.telephone}</div>
            </div>
            <div className="flex space-x-1">
              <div>Opening time: </div>
              <div className="font-semibold">{data.openingTime}</div>
            </div>
            <div className="mt-4">
              <div>Address: </div>
              <div className="flex gap-x-1 flex-wrap font-semibold">
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
      </div>
    </>
  );
};

export default ShopProfile;
