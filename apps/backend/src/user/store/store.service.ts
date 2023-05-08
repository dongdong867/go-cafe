import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { GetStoreArgs } from './dto/args/get-store.args';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(private readonly userService: UserService) {}

  getStore(getStoreArgs: GetStoreArgs): Store {
    const account: string = getStoreArgs.account;
    const store: Store = {
      name: 'get store name',
      address: 'get store address',
      phone: '0912345678',
      info: 'get store info',
      postCount: 0,
    };

    console.log({
      account: account,
      ...store,
    });

    return store;
  }
}
