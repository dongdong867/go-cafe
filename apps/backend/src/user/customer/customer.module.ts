import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { UserService } from '../user.service';

@Module({
  providers: [CustomerResolver, CustomerService, UserService],
})
export class CustomerModule {}
