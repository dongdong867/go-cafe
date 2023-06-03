type MenuDish = {
  dishName: string;
  price: number;
};

type Category = {
  categoryName: string;
  dishes: MenuDish[];
};

type Menu = Category[];
