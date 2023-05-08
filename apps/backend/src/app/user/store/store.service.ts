import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { GetStoreArgs } from './dto/args/get-store.args';

import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';
import { Store } from './models/store.entity';

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

  getStores(getStoresArgs: GetStoresArgs): Store[] {
    let n = 0;
    const list: Store[] = [];
    getStoresArgs.accounts.forEach((storeAccount) => {
      const account: string = storeAccount;
      const store: Store = {
        name: 'get store name' + n,
        address: 'get store address' + n,
        phone: '0912345678' + n,
        info: 'get store info' + n,
        postCount: n,
      };

      list.push(store);

      console.log({
        account: account,
        ...store,
      });

      n++;
    });
    return list;
  }

  createStore(createStoreInput: CreateStoreInput): Store {
    const account: string = createStoreInput.account;
    const password: string = createStoreInput.password;
    const store: Store = {
      name: createStoreInput.name,
      address: createStoreInput.address,
      phone: createStoreInput.phone,
      info: createStoreInput.info,
      postCount: 0,
    };

    console.log({
      account: account,
      password: password,
      ...store,
    });

    return store;
  }

  updateStore(updateStoreInput: UpdateStoreInput): Store {
    if (
      !this.userService.certifyUser(
        updateStoreInput.account,
        updateStoreInput.token
      )
    )
      throw new Error('invalidate user token');

    const store: Store = {
      name: updateStoreInput.name || 'old name',
      address: updateStoreInput.address || 'old address',
      phone: updateStoreInput.phone || 'old phone',
      info: updateStoreInput.info || 'old info',
      postCount: 0,
    };

    return store;
  }
}
