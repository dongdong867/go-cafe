import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/input/create-order.input';
import { StoreService } from '../user/store/store.service';
import { FirebaseService } from '../firebase/firebase.service';
import { v4 as uuid } from 'uuid';
import admin from 'firebase-admin';
import { OrderType } from './models/order.firebase';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly storeService: StoreService,
    private readonly firebase: FirebaseService,
    private readonly prisma: PrismaService
  ) {}

  // getUnfinishedOrder(currentId: string): Order[] {
  //   // return unfinished order
  //   const orderList: Order[] = [
  //     {
  //       id: uuidv4(),
  //       customerAccount: 'test customer account 1',
  //       tableNumber: 'take away',
  //       totalPrice: 1234,
  //       dishes: [
  //         {
  //           name: 'dish 1',
  //           price: 1234,
  //           count: 3,
  //         },
  //         {
  //           name: 'dish 2',
  //           price: 234,
  //           count: 2,
  //         },
  //       ],
  //       finished: false,
  //     },
  //     {
  //       id: uuidv4(),
  //       customerAccount: 'test customer account 2',
  //       tableNumber: 'take away',
  //       totalPrice: 1234,
  //       dishes: [
  //         {
  //           name: 'dish 3',
  //           price: 1234,
  //           count: 3,
  //         },
  //         {
  //           name: 'dish 4',
  //           price: 234,
  //           count: 2,
  //         },
  //       ],
  //       finished: false,
  //     },
  //   ];

  //   return orderList;
  // }

  async createOrder(
    currentId: string,
    createOrderInput: CreateOrderInput
  ): Promise<string> {
    const customer = await this.prisma.customer.findUniqueOrThrow({
      where: {
        id: currentId,
      },
    });
    console.log(customer);

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

  // finishOrder(currentUser: Store, finishOrderInput: FinishOrderInput): string {
  //   return `order id ${finishOrderInput.id} has finished`;
  // }
}
