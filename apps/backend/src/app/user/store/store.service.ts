import { Injectable } from '@nestjs/common';
import { GetStoreArgs } from './dto/args/get-store.args';
import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';
import { Store } from './models/store.entity';
import { PrismaService } from '../../prisma/prisma.service';
import { StoreSelect } from './dto/select/store.select';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  async getStoreIdByAccount(storeAccount: string): Promise<string> {
    const data = await this.prisma.store.findFirstOrThrow({
      where: {
        user: {
          account: storeAccount,
        },
      },
      select: {
        id: true,
      },
    });

    return data.id;
  }

  async getStore(getStoreArgs: GetStoreArgs): Promise<Store> {
    const id = await this.getStoreIdByAccount(getStoreArgs.account);
    const store = await this.prisma.store.findUniqueOrThrow({
      where: {
        id: id,
      },
      select: StoreSelect,
    });
    return store;
  }

  async getStores(getStoresArgs: GetStoresArgs): Promise<Store[]> {
    return await this.prisma.store.findMany({
      where: {
        user: {
          OR: [
            {
              account: {
                contains: getStoresArgs.query,
              },
            },
            {
              name: {
                contains: getStoresArgs.query,
              },
            },
          ],
        },
      },
      select: StoreSelect,
    });
  }

  async createStore(createStoreInput: CreateStoreInput): Promise<string> {
    await this.prisma.store.create({
      data: {
        user: {
          create: {
            account: createStoreInput.account,
            password: createStoreInput.password,
            name: createStoreInput.name,
            phone: createStoreInput.phone,
            avatar: {
              create: {
                data: createStoreInput.avatar,
              },
            },
          },
        },
        address: createStoreInput.address,
        info: createStoreInput.info,
        storeRating: {
          create: {
            rating: {
              create: {},
            },
          },
        },
      },
    });

    return 'store create successfully';
  }

  async updateStore(
    currentId: string,
    updateStoreInput: UpdateStoreInput
  ): Promise<string> {
    await this.prisma.store.update({
      where: {
        id: currentId,
      },
      data: {
        user: {
          update: {
            name: updateStoreInput.name,
            phone: updateStoreInput.phone,
            avatar: {
              update: {
                data: updateStoreInput.avatar,
              },
            },
          },
        },
        address: updateStoreInput.address,
        info: updateStoreInput.info,
      },
    });

    return 'store account updated successfully';
  }
}
