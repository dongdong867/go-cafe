import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.entity';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';
import { UpdateCustomerInput } from './dto/inputs/update-customer.input';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user-auth.guard';
import { CurrentUser } from '../decorator/current-user.decorator';

@UseGuards(UserAuthGuard)
@Resolver()
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query(() => Customer, { name: 'customer' })
  getCustomer(@CurrentUser() customer: Customer): Customer {
    return this.customerService.getCustomer(customer);
  }

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput
  ): Customer {
    return this.customerService.createCustomer(createCustomerInput);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @CurrentUser() customer: Customer,
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput
  ): Customer {
    return this.customerService.updateCustomer(customer, updateCustomerInput);
  }
}
