type Props = {
  category: {
    title: string;
    items: {
      name: string;
    }[];
  };
};

const MenuCategory = ({ category }: Props) => {
  return (
    <>
      <li id={category.title} className="menu-title">
        <span>{category.title}</span>
      </li>
      {category.items.map((item) => (
        <li key={item.name}>
          <button className="text-xl font-bold">{item.name}</button>
        </li>
      ))}
    </>
  );
};

export default MenuCategory;
