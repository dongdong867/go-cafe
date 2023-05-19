import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserPostService } from './user-post.service';
import { CreateUserPostInput } from './dto/input/create-user-post.input';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../../user/guards/user-auth.guard';
import { CustomerGuard } from '../../user/guards/role.guard';
import { CurrentId } from '../../user/decorator/current-id.decorator';
import { CurrentUser } from '../../user/decorator/current-user.decorator';
import { Customer } from '../../user/customer/models/customer.entity';
import { UserPost } from './models/user-post.entity';
import { UpdateUserPostInput } from './dto/input/update-user-post.input';
import { DeleteUserPostInput } from './dto/input/delete-user-post.input';

@UseGuards(UserAuthGuard, CustomerGuard)
@Resolver(() => UserPost)
export class UserPostResolver {
  constructor(private readonly userPostService: UserPostService) {}

  @Query(() => [UserPost], { name: 'userPost', nullable: 'items' })
  getPosts(@CurrentId() userId: string): UserPost[] {
    return this.userPostService.getPosts(userId);
  }

  @Mutation(() => UserPost)
  createUserPost(
    @CurrentUser() currentUser: Customer,
    @Args('createUserPostInput') createUserPostInput: CreateUserPostInput
  ): UserPost {
    return this.userPostService.createUserPost(
      currentUser,
      createUserPostInput
    );
  }

  @Mutation(() => UserPost)
  updateUserPost(
    @CurrentUser() currentUser: Customer,
    @Args('updateUserPostUInput') updateUserPostInput: UpdateUserPostInput
  ): UserPost {
    return this.userPostService.updateUserPost(
      currentUser,
      updateUserPostInput
    );
  }

  @Mutation(() => String)
  deleteUserPost(
    @CurrentUser() currentUser: Customer,
    @Args('deleteUserPostInput') deleteUserPostInput: DeleteUserPostInput
  ): string {
    return this.userPostService.deleteUserPost(
      currentUser,
      deleteUserPostInput
    );
  }
}
