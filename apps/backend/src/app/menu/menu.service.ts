import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { PrismaService } from '../prisma/prisma.service';
import { MenuType } from './models/menu.firebase';
import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';
import { CreateMenuInput } from './dto/input/create-menu.input';
import { UpdateMenuInput } from './dto/input/update-menu.input';

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
