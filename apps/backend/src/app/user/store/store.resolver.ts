import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { GetStoreArgs } from './dto/args/get-store.args';
import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';
import { Store } from './models/store.entity';

@Resolver(() => Store)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => Store, { name: 'store' })
  getStore(@Args() getStoreArgs: GetStoreArgs): Store {
    return this.storeService.getStore(getStoreArgs);
  }

  @Query(() => [Store], { name: 'stores' })
  getStores(@Args() getStoresArgs: GetStoresArgs): Store[] {
    return this.storeService.getStores(getStoresArgs);
  }

  @Mutation(() => Store)
  createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput
  ): Store {
    return this.storeService.createStore(createStoreInput);
  }

  @Mutation(() => Store)
  updateStore(
    @Args('updateStoreInput') updateStoreInput: UpdateStoreInput
  ): Store {
    return this.storeService.updateStore(updateStoreInput);
  }
}
