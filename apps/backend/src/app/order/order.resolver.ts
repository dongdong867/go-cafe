import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/input/create-order.input';
import { Order } from './models/order.entity';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { Store } from '../user/store/models/store.entity';
import { CustomerGuard, StoreGuard } from '../user/guards/role.guard';
import { Customer } from '../user/customer/models/customer.entity';
import { FinishOrderInput } from './dto/input/finish-order.input';
import { CurrentId } from '../user/decorator/current-id.decorator';

@UseGuards(UserAuthGuard)
@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(StoreGuard)
  @Query(() => [Order], { name: 'unfinishedOrder' })
  getUnfinishedOrder(@CurrentId() currentId: string) {
    return this.orderService.getUnfinishedOrder(currentId);
  }

  @UseGuards(CustomerGuard)
  @Mutation(() => Order)
  createOrder(
    @CurrentUser() currentUser: Customer,
    @Args('createOrderInput') createOrderInput: CreateOrderInput
  ): Order {
    return this.orderService.createOrder(currentUser, createOrderInput);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  finishOrder(
    @CurrentUser() currentUser: Store,
    @Args('finishOrderInput') finishOrderInput: FinishOrderInput
  ): string {
    return this.orderService.finishOrder(currentUser, finishOrderInput);
  }
}
