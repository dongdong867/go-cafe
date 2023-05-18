import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { GetStoreArgs } from './dto/args/get-store.args';
import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';
import { Store } from './models/store.entity';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  async getStoreIdByAccount(storeAccount: string): Promise<string> {
    const data = await this.prisma.store
      .findFirstOrThrow({
        where: {
          User: {
            account: storeAccount,
          },
        },
        select: {
          id: true,
        },
      })
      .catch((err) => {
        throw new NotFoundException(err, 'store not found');
      });
    return data.id;
  }

  async getStore(getStoreArgs: GetStoreArgs): Promise<Store> {
    const id = await this.getStoreIdByAccount(getStoreArgs.account);
    const store = await this.prisma.store.findUniqueOrThrow({
      where: {
        id: id,
      },
      select: {
        User: {
          select: {
            account: true,
            name: true,
            phone: true,
            postCount: true,
            Avatar: {
              select: {
                data: true,
              },
            },
          },
        },
        address: true,
        info: true,
        StoreRating: {
          select: {
            Rating: {
              select: {
                general: true,
                environment: true,
                meals: true,
                attitude: true,
              },
            },
            postCount: true,
          },
        },
      },
    });
    return store;
  }

  async getStores(getStoresArgs: GetStoresArgs): Promise<Store[]> {
    const list: Store[] = [];

    for (let i = 0; i < getStoresArgs.accounts.length; i++) {
      const store = await this.getStore({
        account: getStoresArgs.accounts.at(i),
      });
      list.push(store);
    }

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
          StoreRating: {
            create: {
              Rating: {
                create: {},
              },
            },
          },
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

  async updateStore(
    currentId: string,
    updateStoreInput: UpdateStoreInput
  ): Promise<string> {
    await this.prisma.store
      .update({
        where: {
          id: currentId,
        },
        data: {
          User: {
            update: {
              name: updateStoreInput.name,
              phone: updateStoreInput.phone,
              Avatar: {
                update: {
                  data: updateStoreInput.avatar,
                },
              },
            },
          },
          address: updateStoreInput.address,
          info: updateStoreInput.info,
        },
      })
      .catch((err) => {
        throw new InternalServerErrorException(
          err,
          'failed when updating store account'
        );
      });

    return 'store account updated successfully';
  }
}
