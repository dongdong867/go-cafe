import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Customer } from './models/customer.entity';
import { CreateCustomerInput } from './dto/inputs/create-customer.input';
import { UpdateCustomerInput } from './dto/inputs/update-customer.input';
import { PrismaService } from '../../prisma/prisma.service';
import { randomBytes, pbkdf2Sync } from 'crypto';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async getCustomer(currentId: string): Promise<Customer> {
    const customer: Customer = await this.prisma.customer.findUnique({
      where: {
        id: currentId,
      },
      select: {
        user: {
          select: {
            account: true,
            name: true,
            phone: true,
            postCount: true,
            avatar: {
              select: {
                data: true,
              },
            },
          },
        },
        email: true,
        followingCount: true,
      },
    });

    return customer;
  }

  async createCustomer(
    createCustomerInput: CreateCustomerInput,
  ): Promise<string> {
    const salt = randomBytes(32).toString('hex');
    const saltedPassword = pbkdf2Sync(
      createCustomerInput.password,
      salt,
      10000,
      64,
      'sha256',
    ).toString('hex');

    await this.prisma.customer
      .create({
        data: {
          user: {
            create: {
              account: createCustomerInput.account,
              password: saltedPassword,
              salt: salt,
              name: createCustomerInput.name,
              phone: createCustomerInput.phone,
              avatar: {
                create: {
                  data: createCustomerInput.avatar,
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
          'failed on creating customer account',
        );
      });

    return 'customer create successfully';
  }

  async updateCustomer(
    currentId: string,
    updateCustomerInput: UpdateCustomerInput,
  ): Promise<string> {
    await this.prisma.customer
      .update({
        where: {
          id: currentId,
        },
        data: {
          user: {
            update: {
              name: updateCustomerInput.name,
              phone: updateCustomerInput.phone,
              avatar: {
                update: {
                  data: updateCustomerInput.avatar,
                },
              },
            },
          },
          email: updateCustomerInput.email,
        },
      })
      .catch((err) => {
        throw new InternalServerErrorException(
          err,
          'failed on updating customer account',
        );
      });

    return 'customer update successfully';
  }
}
