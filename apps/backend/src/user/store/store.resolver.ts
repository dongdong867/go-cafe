import { Args, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { Store } from './entities/store.entity';
import { GetStoreArgs } from './dto/args/get-store.args';

@Resolver(() => Store)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => Store, { name: 'store' })
  getStore(@Args() getStoreArgs: GetStoreArgs) {
    return new Store();
  }
}
