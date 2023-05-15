import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { UserService } from '../user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [StoreResolver, StoreService, UserService],
  exports: [StoreService],
})
export class StoreModule {}
