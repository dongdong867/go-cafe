import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
