type Props = {
  categories: {
    name: string;
    dishes: {
      name: string;
      price: number;
    }[];
  }[];
};

const MenuNavigator = ({ categories }: Props) => {
  return (
    <>
      <div className="btn-group w-full px-1 overflow-x-scroll">
        {categories.map((category) => (
          <a
            key={category.name}
            href={`#${category.name}`}
            className="btn btn-primary text-white text-base"
          >
            {category.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default MenuNavigator;
