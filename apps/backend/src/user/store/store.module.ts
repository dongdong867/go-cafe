import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { UserService } from '../user.service';

@Module({
  providers: [StoreResolver, StoreService, UserService],
})
export class StoreModule {}
