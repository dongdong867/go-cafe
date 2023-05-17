import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.entity';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';
import { UpdateCustomerInput } from './dto/inputs/update-customer.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../decorator/current-user.decorator';
import { UserAuthGuard } from '../guards/user-auth.guard';
import { CustomerGuard } from '../guards/role.guard';
import { CurrentId } from '../decorator/current-id.decorator';

@UseGuards(UserAuthGuard)
@Resolver()
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(CustomerGuard)
  @Query(() => Customer, { name: 'customer' })
  getCustomer(@CurrentUser() customer: Customer): Customer {
    return this.customerService.getCustomer(customer);
  }

  @Mutation(() => String)
  async createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput
  ): Promise<string> {
    return await this.customerService.createCustomer(createCustomerInput);
  }

  @UseGuards(CustomerGuard)
  @Mutation(() => String)
  updateCustomer(
    @CurrentId() currentId: string,
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput
  ): Promise<string> {
    return this.customerService.updateCustomer(currentId, updateCustomerInput);
  }
}
