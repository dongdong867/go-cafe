import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from '../user.service';
import { GetStoreArgs } from './dto/args/get-store.args';
import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';
import { Store } from './models/store.entity';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  getStoreIdByAccount(storeAccount: string): string {
    return uuidv4();
  }

  getStore(getStoreArgs: GetStoreArgs): Store {
    return null;
  }

  getStores(getStoresArgs: GetStoresArgs): Store[] {
    let n = 0;
    const list: Store[] = [];
    getStoresArgs.accounts.forEach((storeAccount) => {
      n++;
    });
    return list;
  }

  async createStore(createStoreInput: CreateStoreInput): Promise<string> {
    await this.prisma.store
      .create({
        data: {
          User: {
            create: {
              account: createStoreInput.account,
              password: createStoreInput.password,
              name: createStoreInput.name,
              phone: createStoreInput.phone,
              Avatar: {
                create: {
                  data: createStoreInput.avatar,
                },
              },
            },
          },
          address: createStoreInput.address,
          info: createStoreInput.info,
        },
      })
      .catch((err) => {
        throw new InternalServerErrorException(
          err,
          'failed when creating store account'
        );
      });

    return 'store create successfully';
  }

  updateStore(store: Store, updateStoreInput: UpdateStoreInput): Store {
    store = {
      ...store,
      ...updateStoreInput,
    };

    return store;
  }
}
