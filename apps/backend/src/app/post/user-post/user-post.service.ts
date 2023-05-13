import { Injectable } from '@nestjs/common';
import { CreateUserPostInput } from './dto/input/create-user-post.input';
import { UserPost } from './models/user-post.entity';
import { Customer } from '../../user/customer/models/customer.entity';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserPostInput } from './dto/input/update-user-post.input';
import { DeleteUserPostInput } from './dto/input/delete-user-post.input';

@Injectable()
export class UserPostService {
  getPosts(userId: string): UserPost[] {
    return [
      {
        id: 'postId1',
        userAccount: 'user 1',
        storeAccount: 'store 1',
        body: 'this is a fake body',
        rating: {
          general: 4,
          environment: 3,
          meals: 3,
          attitude: 2,
        },
      },
      {
        id: 'postId2',
        userAccount: 'user 2',
        storeAccount: 'store 2',
        body: 'this is a fake body',
        rating: {
          general: 5,
          environment: 2,
          meals: 1,
          attitude: 3,
        },
      },
      {
        id: 'postId3',
        userAccount: 'user 3',
        storeAccount: 'store 3',
        body: 'this is a fake body',
        rating: {
          general: 2,
          environment: 3,
          meals: 4,
          attitude: 4,
        },
      },
    ];
  }

  createUserPost(
    currentUser: Customer,
    createUserPostInput: CreateUserPostInput
  ): UserPost {
    const post: UserPost = {
      id: uuidv4(),
      userAccount: currentUser.account,
      ...createUserPostInput,
    };

    return post;
  }

  updateUserPost(
    currentUser: Customer,
    updateUserPostInput: UpdateUserPostInput
  ): UserPost {
    const post: UserPost = {
      userAccount: currentUser.account,
      storeAccount: 'test update store account',
      ...updateUserPostInput,
    };

    return post;
  }

  deleteUserPost(
    currentUser: Customer,
    deleteUserPostInput: DeleteUserPostInput
  ): string {
    return `delete post id: ${deleteUserPostInput.postId} successful`;
  }
}
