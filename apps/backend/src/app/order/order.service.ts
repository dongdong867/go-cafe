import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/input/create-order.input';
import { Customer } from '../user/customer/models/customer.entity';
import { Order } from './models/order.entity';
import { FinishOrderInput } from './dto/input/finish-order.input';
import { Store } from '../user/store/models/store.entity';
import { v4 as uuidv4 } from 'uuid';
import { StoreService } from '../user/store/store.service';

@Injectable()
export class OrderService {
  constructor(private readonly storeService: StoreService) {}

  getUnfinishedOrder(currentId: string): Order[] {
    // return unfinished order
    const orderList: Order[] = [
      {
        id: uuidv4(),
        customerAccount: 'test customer account 1',
        tableNumber: 'take away',
        totalPrice: 1234,
        dishes: [
          {
            name: 'dish 1',
            price: 1234,
            count: 3,
          },
          {
            name: 'dish 2',
            price: 234,
            count: 2,
          },
        ],
        finished: false,
      },
      {
        id: uuidv4(),
        customerAccount: 'test customer account 2',
        tableNumber: 'take away',
        totalPrice: 1234,
        dishes: [
          {
            name: 'dish 3',
            price: 1234,
            count: 3,
          },
          {
            name: 'dish 4',
            price: 234,
            count: 2,
          },
        ],
        finished: false,
      },
    ];

    return orderList;
  }

  createOrder(
    currentUser: Customer,
    createOrderInput: CreateOrderInput
  ): Order {
    const store = this.storeService.getStoreIdByAccount(
      createOrderInput.storeAccount
    );
    const order: Order = {
      id: uuidv4(),
      customerAccount: currentUser.account,
      tableNumber: createOrderInput.tableNumber,
      totalPrice: createOrderInput.totalPrice,
      dishes: createOrderInput.dishes,
      finished: false,
    };

    return order;
  }

  finishOrder(currentUser: Store, finishOrderInput: FinishOrderInput): string {
    return `order id ${finishOrderInput.id} has finished`;
  }
}
