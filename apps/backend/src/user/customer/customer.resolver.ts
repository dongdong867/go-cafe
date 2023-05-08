import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.entity';
import { GetCustomerArgs } from './dto/args/get-customer.args';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query(() => Customer, { name: 'customer' })
  getCustomer(@Args() getCustomerArgs: GetCustomerArgs): Customer {
    return new Customer();
  }

  @Mutation(() => Customer)
  createCustomer(@Args() createCustomerInput: CreateCustomerInput): Customer {
    return new Customer();
  }
}
