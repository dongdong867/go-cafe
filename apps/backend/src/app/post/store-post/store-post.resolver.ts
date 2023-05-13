import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StorePostService } from './store-post.service';
import { CreateStorePostInput } from './dto/input/create-store-post.input';
import { UpdateStorePostInput } from './dto/input/update-store-post.input';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../../user/guards/user-auth.guard';
import { GetStorePostArgs } from './dto/args/get-store-post.args';
import { CurrentUser } from '../../user/decorator/current-user.decorator';
import { Store } from '../../user/store/models/store.entity';
import { StorePost } from './models/store-post.entity';
import { DeleteStorePostInput } from './dto/input/delete-store-post.input';
import { StoreGuard } from '../../user/guards/role.guard';

@UseGuards(UserAuthGuard)
@Resolver(() => StorePost)
export class StorePostResolver {
  constructor(private readonly storePostService: StorePostService) {}

  @Query(() => [StorePost], { name: 'storePost', nullable: 'items' })
  getPosts(@Args() getStorePostArgs: GetStorePostArgs): StorePost[] {
    return this.storePostService.getPosts(getStorePostArgs);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => StorePost)
  createStorePost(
    @CurrentUser() currentUser: Store,
    @Args('createStorePostInput') createStorePostInput: CreateStorePostInput
  ): StorePost {
    return this.storePostService.createStorePost(
      currentUser,
      createStorePostInput
    );
  }

  @UseGuards(StoreGuard)
  @Mutation(() => StorePost)
  updateStorePost(
    @CurrentUser() currentUser: Store,
    @Args('updateStorePostInput') updateStorePostInput: UpdateStorePostInput
  ): StorePost {
    return this.storePostService.updateStorePost(
      currentUser,
      updateStorePostInput
    );
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  deleteStorePost(
    @CurrentUser() currentUser: Store,
    @Args('deleteStorePostInput') deleteStorePostInput: DeleteStorePostInput
  ): string {
    return this.storePostService.deleteStorePost(
      currentUser,
      deleteStorePostInput
    );
  }
}
