import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [CustomerModule, StoreModule],
  exports: [CustomerModule, StoreModule],
})
export class UserModule {}
