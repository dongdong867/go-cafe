import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryType, DishType, MenuType } from './models/menu.firebase';
import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';
import { CreateMenuInput } from './dto/input/create-menu.input';
import { UpdateMenuInput } from './dto/input/update-menu.input';
import { GetMenuArgs } from './dto/args/get-menu.args';
import { Category, Dish, Menu } from './models/menu.entity';
import { StoreService } from '../user/store/store.service';

@Injectable()
export class MenuService {
  constructor(
    private readonly storeService: StoreService,
    private readonly firebase: FirebaseService,
    private readonly prisma: PrismaService
  ) {}

  async getMenu(getMenuArgs: GetMenuArgs): Promise<Menu> {
    const storeId: string = await this.storeService.getStoreIdByAccount(
      getMenuArgs.storeAccount
    );
    const data = await this.firebase
      .firestore()
      .collection('menu')
      .where('store_id', '==', storeId)
      .get();

    const menu: Menu[] = data.docs.map(
      (menu): Menu => ({
        categories: menu.get('menu').map(
          (category: CategoryType): Category => ({
            name: category.category_name,
            dishes: category.dishes.map(
              (dish: DishType): Dish => ({
                name: dish.dish_name,
                price: dish.price,
              })
            ),
          })
        ),
      })
    );

    return menu[0];
  }

  async createMenu(
    currentId: string,
    createMenuInput: CreateMenuInput
  ): Promise<string> {
    await this.prisma.store.findUniqueOrThrow({
      where: {
        id: currentId,
      },
    });

    const menu: MenuType = {
      id: uuid(),
      store_id: currentId,
      menu: createMenuInput.categories.map((category) => ({
        category_name: category.name,
        dishes: category.dishes.map((dish) => ({
          dish_name: dish.name,
          price: dish.price,
        })),
      })),
      update_at: admin.firestore.FieldValue.serverTimestamp(),
    };

    await this.firebase.firestore().collection('menu').doc(menu.id).set(menu);

    return 'menu created successfully';
  }

  async updateMenu(
    currentId: string,
    updateMenuInput: UpdateMenuInput
  ): Promise<string> {
    await this.prisma.store.findUniqueOrThrow({
      where: {
        id: currentId,
      },
    });

    const menu: MenuType = {
      id: updateMenuInput.id,
      store_id: currentId,
      menu: updateMenuInput.categories.map((category) => ({
        category_name: category.name,
        dishes: category.dishes.map((dish) => ({
          dish_name: dish.name,
          price: dish.price,
        })),
      })),
      update_at: admin.firestore.FieldValue.serverTimestamp(),
    };

    await this.firebase
      .firestore()
      .collection('menu')
      .doc(menu.id)
      .update(menu);

    return 'menu updated successfully';
  }
}
