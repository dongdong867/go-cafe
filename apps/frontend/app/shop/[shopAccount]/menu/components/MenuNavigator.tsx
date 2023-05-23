type Props = {
  categories: {
    title: string;
    items: {
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
            key={category.title}
            href={`#${category.title}`}
            className="btn btn-primary text-white text-base"
          >
            {category.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default MenuNavigator;
