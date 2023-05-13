import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [MenuResolver, MenuService],
})
export class MenuModule {}
