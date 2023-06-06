type Props = {
  categoryNameList: string[];
};

const MenuNavigator = ({ categoryNameList }: Props) => {
  return (
    <>
      <div className="btn-group w-full px-1 overflow-x-scroll">
        {categoryNameList.map((category) => (
          <a
            key={category}
            href={`#${category}`}
            className="btn btn-primary text-white text-base"
          >
            {category}
          </a>
        ))}
      </div>
    </>
  );
};

export default MenuNavigator;
