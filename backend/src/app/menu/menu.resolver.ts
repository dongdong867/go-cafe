import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CustomerGuard, StoreGuard } from '../user/guards/role.guard';
import { CurrentId } from '../user/decorator/current-id.decorator';
import { CreateMenuInput } from './dto/input/create-menu.input';
import { UpdateMenuInput } from './dto/input/update-menu.input';
import { GetMenuArgs } from './dto/args/get-menu.args';
import { Category } from './models/menu.entity';

@UseGuards(UserAuthGuard)
@Resolver(() => Category)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(CustomerGuard)
  @Query(() => [Category], { name: 'menu', nullable: 'items' })
  async getMenu(@Args() getMenuArgs: GetMenuArgs): Promise<Category[]> {
    return await this.menuService.getMenu(getMenuArgs);
  }

  @UseGuards(StoreGuard)
  @Query(() => [Category], { name: 'selfMenu', nullable: 'items' })
  async getSelfMenu(@CurrentId() currentId: string): Promise<Category[]> {
    return await this.menuService.getSelfMenu(currentId);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async createMenu(
    @CurrentId() currentId: string,
    @Args('createMenuInput') createMenuInput: CreateMenuInput,
  ): Promise<string> {
    return await this.menuService.createMenu(currentId, createMenuInput);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async updateMenu(
    @CurrentId() currentId: string,
    @Args('updateMenuInput') updateMenuInput: UpdateMenuInput,
  ): Promise<string> {
    return await this.menuService.updateMenu(currentId, updateMenuInput);
  }
}
