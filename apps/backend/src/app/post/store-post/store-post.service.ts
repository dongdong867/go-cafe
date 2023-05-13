import { Injectable } from '@nestjs/common';
import { CreateStorePostInput } from './dto/input/create-store-post.input';
import { UpdateStorePostInput } from './dto/input/update-store-post.input';
import { GetStorePostArgs } from './dto/args/get-store-post.args';
import { StorePost } from './models/store-post.entity';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '../../user/store/models/store.entity';
import { DeleteStorePostInput } from './dto/input/delete-store-post.input';

@Injectable()
export class StorePostService {
  getPosts(getStorePostArgs: GetStorePostArgs): StorePost[] {
    const posts: StorePost[] = [
      {
        id: uuidv4(),
        title: 'test title',
        storeAccount: getStorePostArgs.storeAccount,
        body: 'test body',
      },
    ];

    return posts;
  }

  createStorePost(
    currentUser: Store,
    createStorePostInput: CreateStorePostInput
  ): StorePost {
    const post: StorePost = {
      id: uuidv4(),
      storeAccount: currentUser.account,
      ...createStorePostInput,
    };

    return post;
  }

  updateStorePost(
    currentUser: Store,
    updateStorePostInput: UpdateStorePostInput
  ): StorePost {
    const post: StorePost = {
      storeAccount: currentUser.account,
      ...updateStorePostInput,
    };

    return post;
  }

  deleteStorePost(
    currentUser: Store,
    deleteStorePostInput: DeleteStorePostInput
  ): string {
    return `delete store post ${deleteStorePostInput.id} successfully`;
  }
}
