import CommodityModal from './CommodityModal/CommodityModal';

type Props = {
  name: string;
  dishes: {
    name: string;
    price: number;
  }[];
};

const MenuCategory = ({ name, dishes }: Props) => {
  return (
    <>
      <li id={name} className="menu-title">
        <span>{name}</span>
      </li>
      {dishes.map((dish) => (
        <CommodityModal key={dish.name} dish={dish} />
      ))}
    </>
  );
};

export default MenuCategory;
