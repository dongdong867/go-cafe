import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../../user/guards/user-auth.guard';
import { CustomerGuard } from '../../user/guards/role.guard';
import { CurrentId } from '../../user/decorator/current-id.decorator';
import { CustomerPost } from './models/customer-post.entity';
import { CustomerPostService } from './customer-post.service';
import { CreateCustomerPostInput } from './dto/input/create-customer-post.input';
import { UpdateCustomerPostInput } from './dto/input/update-customer-post.input';
import { DeleteCustomerPostInput } from './dto/input/delete-customer-post.input';

@UseGuards(UserAuthGuard, CustomerGuard)
@Resolver(() => CustomerPost)
export class CustomerPostResolver {
  constructor(private readonly customerPostService: CustomerPostService) {}

  @Query(() => [CustomerPost], { name: 'customerPost', nullable: 'items' })
  async getPosts(@CurrentId() currentId: string): Promise<CustomerPost[]> {
    return await this.customerPostService.getPosts(currentId);
  }

  @Mutation(() => String)
  async createCustomerPost(
    @CurrentId() currentId: string,
    @Args('createCustomerPostInput')
    createCustomerPostInput: CreateCustomerPostInput
  ): Promise<string> {
    return await this.customerPostService.createCustomerPost(
      currentId,
      createCustomerPostInput
    );
  }

  @Mutation(() => String)
  async updateCustomerPost(
    @CurrentId() currentId: string,
    @Args('updateCustomerPostUInput')
    updateCustomerPostInput: UpdateCustomerPostInput
  ): Promise<string> {
    return await this.customerPostService.updateCustomerPost(
      currentId,
      updateCustomerPostInput
    );
  }

  @Mutation(() => String)
  async deleteCustomerPost(
    @CurrentId() currentId: string,
    @Args('deleteCustomerPostInput')
    deleteCustomerPostInput: DeleteCustomerPostInput
  ): Promise<string> {
    return await this.customerPostService.deleteCustomerPost(
      currentId,
      deleteCustomerPostInput
    );
  }
}
