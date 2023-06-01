import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StorePostService } from './store-post.service';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../../user/guards/user-auth.guard';
import { GetStorePostArgs } from './dto/args/get-store-post.args';
import { StorePost } from './models/store-post.entity';
import { StoreGuard } from '../../user/guards/role.guard';
import { CurrentId } from '../../user/decorator/current-id.decorator';
import { CreateStorePostInput } from './dto/input/create-store-post.input';
import { UpdateStorePostInput } from './dto/input/update-store-post.input';
import { DeleteStorePostInput } from './dto/input/delete-store-post.input';
import { GetStorePostByIdArgs } from './dto/args/get-store-post-by-id.args';

@UseGuards(UserAuthGuard)
@Resolver(() => StorePost)
export class StorePostResolver {
  constructor(private readonly storePostService: StorePostService) {}

  @Query(() => [StorePost], { name: 'storeSelfPost', nullable: 'items' })
  async getSelfPost(@CurrentId() currentId: string): Promise<StorePost[]> {
    return await this.storePostService.getSelfPost(currentId);
  }

  @Query(() => StorePost, { name: 'storePostById' })
  async getPostById(
    @CurrentId() currentId: string,
    @Args() getStorePostByIdArgs: GetStorePostByIdArgs
  ): Promise<StorePost> {
    return await this.storePostService.getPostById(
      currentId,
      getStorePostByIdArgs
    );
  }

  @Query(() => [StorePost], { name: 'storePost', nullable: 'items' })
  async getPosts(
    @Args() getStorePostArgs: GetStorePostArgs
  ): Promise<StorePost[]> {
    return await this.storePostService.getPosts(getStorePostArgs);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async createStorePost(
    @CurrentId() currentId: string,
    @Args('createStorePostInput') createStorePostInput: CreateStorePostInput
  ): Promise<string> {
    return await this.storePostService.createStorePost(
      currentId,
      createStorePostInput
    );
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async updateStorePost(
    @CurrentId() currentId: string,
    @Args('updateStorePostInput') updateStorePostInput: UpdateStorePostInput
  ): Promise<string> {
    return this.storePostService.updateStorePost(
      currentId,
      updateStorePostInput
    );
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async deleteStorePost(
    @CurrentId() currentId: string,
    @Args('deleteStorePostInput') deleteStorePostInput: DeleteStorePostInput
  ): Promise<string> {
    return this.storePostService.deleteStorePost(
      currentId,
      deleteStorePostInput
    );
  }
}
