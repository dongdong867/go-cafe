import { Injectable } from '@nestjs/common';
import { MenuInput } from './dto/input/menu.input';
import { Menu } from './models/menu.entity';
import { GetMenuArgs } from './dto/args/get-menu.args';

@Injectable()
export class MenuService {
  getMenu(getMenuArgs: GetMenuArgs): Menu {
    const fakeMenu: Menu = {
      categories: [
        {
          name: 'coffee',
          dishes: [
            { name: 'america', price: 80 },
            { name: 'latte', price: 120 },
            { name: 'cappuccino', price: 130 },
          ],
        },
        {
          name: 'tea',
          dishes: [
            { name: 'black tea', price: 60 },
            { name: 'green tea', price: 60 },
            { name: 'milk tea', price: 100 },
          ],
        },
        {
          name: 'toast',
          dishes: [
            { name: 'apple toast', price: 200 },
            { name: 'banana toast', price: 200 },
            { name: 'guava toast', price: 200 },
          ],
        },
      ],
    };
    return fakeMenu;
  }

  createMenu(storeId: string, createMenuInput: MenuInput): Menu {
    const menu: Menu = {
      categories: createMenuInput.categories,
    };
    return menu;
  }

  updateMenu(storeId: string, updateMenuInput: MenuInput): Menu {
    const menu: Menu = {
      categories: updateMenuInput.categories,
    };
    return menu;
  }
}
