import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { StoreModule } from './store/store.module';
import { UserService } from './user.service';

@Module({
  imports: [CustomerModule, StoreModule],
  exports: [CustomerModule, StoreModule],
  providers: [UserService],
})
export class UserModule {}
