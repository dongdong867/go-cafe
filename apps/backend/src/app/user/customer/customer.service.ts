import { Injectable } from '@nestjs/common';
import { Customer } from './models/customer.entity';
import { UserService } from '../user.service';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';
import { UpdateCustomerInput } from './dto/inputs/update-customer.input';

@Injectable()
export class CustomerService {
  constructor(private userService: UserService) {}

  getCustomer(customer: Customer): Customer {
    return customer;
  }

  createCustomer(createCustomerInput: CreateCustomerInput): Customer {
    const password = createCustomerInput.password;
    const customer: Customer = {
      account: createCustomerInput.account,
      name: createCustomerInput.name,
      phone: createCustomerInput.phone,
      email: createCustomerInput.email,
      followCount: 0,
      postCount: 0,
      following: [],
    };

    console.log({
      password: password,
      ...customer,
    });

    return customer;
  }

  updateCustomer(
    customer: Customer,
    updateCustomerInput: UpdateCustomerInput
  ): Customer {
    customer = {
      ...customer,
      ...updateCustomerInput,
    };

    return customer;
  }
}
