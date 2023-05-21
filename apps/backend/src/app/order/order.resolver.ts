import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/input/create-order.input';
import { Order } from './models/order.entity';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CustomerGuard, StoreGuard } from '../user/guards/role.guard';
import { CurrentId } from '../user/decorator/current-id.decorator';
import { FinishOrderInput } from './dto/input/finish-order.input';

@UseGuards(UserAuthGuard)
@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(StoreGuard)
  @Query(() => [Order], { name: 'unfinishedOrder' })
  async getUnfinishedOrder(@CurrentId() currentId: string): Promise<Order[]> {
    return await this.orderService.getUnfinishedOrder(currentId);
  }

  @UseGuards(CustomerGuard)
  @Mutation(() => String)
  async createOrder(
    @CurrentId() currentId: string,
    @Args('createOrderInput') createOrderInput: CreateOrderInput
  ): Promise<string> {
    return await this.orderService.createOrder(currentId, createOrderInput);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async finishOrder(
    @CurrentId() currentId: string,
    @Args('finishOrderInput') finishOrderInput: FinishOrderInput
  ): Promise<string> {
    return await this.orderService.finishOrder(currentId, finishOrderInput);
  }
}
