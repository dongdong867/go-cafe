import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/input/create-order.input';
import { StoreService } from '../user/store/store.service';
import { FirebaseService } from '../firebase/firebase.service';
import { v4 as uuid } from 'uuid';
import admin from 'firebase-admin';
import { OrderType } from './models/order.firebase';
import { PrismaService } from '../prisma/prisma.service';
import { FinishOrderInput } from './dto/input/finish-order.input';
import { ForbiddenError } from '@nestjs/apollo';
import { Order, OrderDish } from './models/order.entity';

@Injectable()
export class OrderService {
  constructor(
    private readonly storeService: StoreService,
    private readonly firebase: FirebaseService,
    private readonly prisma: PrismaService
  ) {}

  async getUnfinishedOrder(currentId: string): Promise<Order[]> {
    const orderList = await this.firebase
      .firestore()
      .collection('order')
      .where('store_id', '==', currentId)
      .where('finished', '==', false)
      .get();

    return orderList.docs.map((order) => ({
      id: order.get('id'),
      customerId: order.get('customer_id'),
      tableNumber: order.get('table_number'),
      totalPrice: order.get('total_price'),
      finished: false,
      dishes: order.get('orders').map(
        (dish: admin.firestore.DocumentData): OrderDish => ({
          name: dish.dish_name,
          count: dish.count,
          price: dish.price,
        })
      ),
    }));
  }

  async createOrder(
    currentId: string,
    createOrderInput: CreateOrderInput
  ): Promise<string> {
    await this.prisma.customer.findUniqueOrThrow({
      where: {
        id: currentId,
      },
    });

    const order: OrderType = {
      id: uuid(),
      customer_id: currentId,
      store_id: await this.storeService.getStoreIdByAccount(
        createOrderInput.storeAccount
      ),
      table_number: createOrderInput.tableNumber,
      orders: createOrderInput.dishes.map((order) => ({
        dish_name: order.name,
        count: order.count,
        price: order.price,
      })),
      total_price: createOrderInput.totalPrice,
      finished: false,
      create_at: admin.firestore.FieldValue.serverTimestamp(),
    };

    await this.firebase
      .firestore()
      .collection('order')
      .doc(order.id)
      .set(order);

    return 'order create successfully';
  }

  async finishOrder(
    currentId: string,
    finishOrderInput: FinishOrderInput
  ): Promise<string> {
    const order = this.firebase
      .firestore()
      .collection('order')
      .doc(finishOrderInput.id);

    if ((await order.get()).get('store_id') !== currentId)
      throw new ForbiddenError('failed when setting order finish');

    await order.update({
      finished: true,
    });

    return 'order finished';
  }
}
