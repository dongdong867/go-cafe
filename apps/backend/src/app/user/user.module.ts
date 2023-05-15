import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { StoreModule } from './store/store.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CustomerModule,
    StoreModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_TOKEN,
    }),
  ],
  exports: [CustomerModule, StoreModule, UserService],
  providers: [UserService, UserResolver],
})
export class UserModule {}
