import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { GetStoreArgs } from './dto/args/get-store.args';
import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';
import { Store } from './models/store.entity';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../guards/user-auth.guard';
import { CustomerGuard, StoreGuard } from '../guards/role.guard';
import { CurrentId } from '../decorator/current-id.decorator';

@UseGuards(UserAuthGuard)
@Resolver(() => Store)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => Store, { name: 'storeSelf' })
  async getSelf(@CurrentId() currentId: string): Promise<Store> {
    return await this.storeService.getSelf(currentId);
  }

  @Query(() => Store, { name: 'store' })
  async getStore(@Args() getStoreArgs: GetStoreArgs): Promise<Store> {
    return await this.storeService.getStore(getStoreArgs);
  }

  @UseGuards(CustomerGuard)
  @Query(() => [Store], { name: 'stores', nullable: 'items' })
  async getStores(@Args() getStoresArgs: GetStoresArgs): Promise<Store[]> {
    return await this.storeService.getStores(getStoresArgs);
  }

  @Mutation(() => String)
  async createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput
  ): Promise<string> {
    return await this.storeService.createStore(createStoreInput);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async updateStore(
    @CurrentId() currentId: string,
    @Args('updateStoreInput') updateStoreInput: UpdateStoreInput
  ): Promise<string> {
    return this.storeService.updateStore(currentId, updateStoreInput);
  }
}
