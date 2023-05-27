import MenuCategory from './MenuCategory';

type Props = {
  categories: {
    name: string;
    dishes: {
      name: string;
      price: number;
    }[];
  }[];
};

const Menu = ({ categories }: Props) => {
  return (
    <>
      <div
        className="
          menu 
          bg-base-100 
          w-full h-full 
          rounded-box 
          px-4 py-8 
          shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
      >
        {categories.map((category) => (
          <MenuCategory
            key={category.name}
            name={category.name}
            dishes={category.dishes}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
