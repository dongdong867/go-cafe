import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { UserService } from '../user.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [StoreResolver, StoreService, UserService],
  exports: [StoreService],
})
export class StoreModule {}
