import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './models/menu.entity';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { CustomerGuard, StoreGuard } from '../user/guards/role.guard';
import { CurrentId } from '../user/decorator/current-id.decorator';
import { CreateMenuInput } from './dto/input/create-menu.input';
import { UpdateMenuInput } from './dto/input/update-menu.input';
import { GetMenuArgs } from './dto/args/get-menu.args';

@UseGuards(UserAuthGuard)
@Resolver(() => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(CustomerGuard)
  @Query(() => Menu, { name: 'menu' })
  async getMenu(@Args() getMenuArgs: GetMenuArgs): Promise<Menu> {
    return await this.menuService.getMenu(getMenuArgs);
  }

  @UseGuards(StoreGuard)
  @Query(() => Menu, { name: 'selfMenu' })
  async getSelfMenu(@CurrentId() currentId: string): Promise<Menu> {
    return await this.menuService.getSelfMenu(currentId);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async createMenu(
    @CurrentId() currentId: string,
    @Args('createMenuInput') createMenuInput: CreateMenuInput
  ): Promise<string> {
    return await this.menuService.createMenu(currentId, createMenuInput);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => String)
  async updateMenu(
    @CurrentId() currentId: string,
    @Args('updateMenuInput') updateMenuInput: UpdateMenuInput
  ): Promise<string> {
    return await this.menuService.updateMenu(currentId, updateMenuInput);
  }
}
