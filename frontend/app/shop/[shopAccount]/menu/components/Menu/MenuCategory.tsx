import CommodityModal from "./CommodityModal/CommodityModal";

type Props = {
  name: string;
  dishes: {
    dishName: string;
    price: number;
  }[];
};

const MenuCategory = ({ name, dishes }: Props) => {
  return (
    <>
      <li id={name} className="menu-title">
        {name}
      </li>
      {dishes.map((dish) => (
        <CommodityModal key={dish.dishName} dish={dish} />
      ))}
    </>
  );
};

export default MenuCategory;
