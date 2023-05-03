import CommodityModal from './CommodityModal/CommodityModal';

type Props = {
  title: string;
  items: {
    name: string;
    price: number;
  }[];
};

const MenuCategory = ({ title, items }: Props) => {
  return (
    <>
      <li id={title} className="menu-title">
        <span>{title}</span>
      </li>
      {items.map((item) => (
        <CommodityModal key={item.name} item={item} />
      ))}
    </>
  );
};

export default MenuCategory;
