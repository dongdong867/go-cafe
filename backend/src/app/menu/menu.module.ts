import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { UserModule } from '../user/user.module';
import { FirebaseModule } from '../firebase/firebase.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, FirebaseModule, PrismaModule],
  providers: [MenuResolver, MenuService],
})
export class MenuModule {}
