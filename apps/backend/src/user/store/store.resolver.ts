import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { Store } from './entities/store.entity';
import { GetStoreArgs } from './dto/args/get-store.args';
import { GetStoresArgs } from './dto/args/get-stores.args';
import { CreateStoreInput } from './dto/input/create-store.input';
import { UpdateStoreInput } from './dto/input/update-store.input';

@Resolver(() => Store)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => Store, { name: 'store' })
  getStore(@Args() getStoreArgs: GetStoreArgs): Store {
    return new Store();
  }

  @Query(() => [Store], { name: 'stores' })
  getStores(@Args() getStoresArgs: GetStoresArgs): Store[] {
    return [new Store()];
  }

  @Mutation(() => Store)
  createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput
  ): Store {
    return new Store();
  }

  @Mutation(() => Store)
  updateStore(
    @Args('updateStoreInput') updateStoreInput: UpdateStoreInput
  ): Store {
    return new Store();
  }
}
