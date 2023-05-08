import { Injectable } from '@nestjs/common';
import { Customer } from './models/customer.entity';
import { GetCustomerArgs } from './dto/args/get-customer.args';
import { UserService } from '../user.service';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';

@Injectable()
export class CustomerService {
  constructor(private userService: UserService) {}

  getCustomer(getCustomerArgs: GetCustomerArgs): Customer {
    if (
      !this.userService.certifyUser(
        getCustomerArgs.account,
        getCustomerArgs.token
      )
    )
      throw new Error('invalidate user token');

    const customer: Customer = {
      name: 'test name',
      phone: '0912345678',
      postCount: 0,
      followCount: 0,
      email: 'test@example.com',
      following: [],
    };
    return customer;
  }

  createCustomer(createCustomerInput: CreateCustomerInput): Customer {
    const account = createCustomerInput.account;
    const password = createCustomerInput.password;
    const customer: Customer = {
      name: createCustomerInput.name,
      phone: createCustomerInput.phone,
      email: createCustomerInput.email,
      followCount: 0,
      postCount: 0,
      following: [],
    };

    console.log({
      account: account,
      password: password,
      ...customer,
    });

    return customer;
  }
}
