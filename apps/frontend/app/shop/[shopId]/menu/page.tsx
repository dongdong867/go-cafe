import PageTitle from 'apps/frontend/app/components/PageTitle';
import MenuCategory from './components/MenuCategory';
import categories from 'apps/frontend/public/data/FakeMenuData';

const ShopMenuPage = () => {
  return (
    <>
      <div className="w-full max-w-lg max-[450px]:w-11/12 m-auto space-y-4 relative">
        <PageTitle title="Menu" />
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
        <div className="menu bg-base-100 w-full h-full rounded-box px-4 py-8 shadow-[0_2px_15px_rgba(0,0,0,0.25)]">
          {categories.map((category) => (
            <MenuCategory key={category.title} category={category} />
          ))}
        </div>
        <div className="w-0 h-20" />
        <div className="fixed w-full bg-base-100 left-0 bottom-0">
          <div className="w-11/12 max-w-lg m-auto py-4">
            <button className="btn btn-primary btn-block text-white text-xl">
              <span>check out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopMenuPage;
