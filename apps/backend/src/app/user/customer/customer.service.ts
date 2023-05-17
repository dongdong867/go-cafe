import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Customer } from './models/customer.entity';
import { UserService } from '../user.service';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';
import { UpdateCustomerInput } from './dto/inputs/update-customer.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  getCustomer(customer: Customer): Customer {
    return customer;
  }

  async createCustomer(
    createCustomerInput: CreateCustomerInput
  ): Promise<string> {
    await this.prisma.customer
      .create({
        data: {
          User: {
            create: {
              account: createCustomerInput.account,
              password: createCustomerInput.password,
              name: createCustomerInput.name,
              phone: createCustomerInput.phone,
              Avatar: {
                create: {
                  data: 'test picture',
                },
              },
            },
          },
          email: createCustomerInput.email,
        },
      })
      .catch((err) => {
        throw new InternalServerErrorException(
          err,
          'failed on creating customer account'
        );
      });

    return 'customer create successfully';
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
