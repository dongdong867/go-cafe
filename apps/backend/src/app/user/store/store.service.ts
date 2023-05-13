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
    const store: Store = {
      account: getStoreArgs.account,
      name: 'get store name',
      address: 'get store address',
      phone: '0912345678',
      info: 'get store info',
      postCount: 0,
    };

    console.log(store);

    return store;
  }

  getStores(getStoresArgs: GetStoresArgs): Store[] {
    let n = 0;
    const list: Store[] = [];
    getStoresArgs.accounts.forEach((storeAccount) => {
      const store: Store = {
        account: storeAccount,
        name: 'get store name' + n,
        address: 'get store address' + n,
        phone: '0912345678' + n,
        info: 'get store info' + n,
        postCount: n,
      };

      list.push(store);

      console.log(store);

      n++;
    });
    return list;
  }

  createStore(createStoreInput: CreateStoreInput): Store {
    const password: string = createStoreInput.password;
    const store: Store = {
      account: createStoreInput.account,
      name: createStoreInput.name,
      address: createStoreInput.address,
      phone: createStoreInput.phone,
      info: createStoreInput.info,
      postCount: 0,
    };

    console.log({
      password: password,
      ...store,
    });

    return store;
  }

  updateStore(store: Store, updateStoreInput: UpdateStoreInput): Store {
    store = {
      ...store,
      ...updateStoreInput,
    };

    return store;
  }
}
