import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { UserService } from '../user.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [CustomerResolver, CustomerService, UserService],
})
export class CustomerModule {}
