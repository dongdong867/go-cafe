import { Injectable } from '@nestjs/common';
import { MenuInput } from './dto/input/menu.input';
import { FirebaseService } from '../firebase/firebase.service';
import { PrismaService } from '../prisma/prisma.service';
import { MenuType } from './models/menu.firebase';
import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';

@Injectable()
export class MenuService {
  constructor(
    private readonly firebase: FirebaseService,
    private readonly prisma: PrismaService
  ) {}

  // async getMenu(getMenuArgs: GetMenuArgs): Promise<Menu> {
  //   return null
  // }

  async createMenu(
    currentId: string,
    createMenuInput: MenuInput
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

    return 'menu create successfully';
  }

  // updateMenu(storeId: string, updateMenuInput: MenuInput): Menu {
  //   const menu: Menu = {
  //     categories: updateMenuInput.categories,
  //   };
  //   return menu;
  // }
}
