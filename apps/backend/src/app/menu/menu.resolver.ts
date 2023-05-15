import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Menu } from './models/menu.entity';
import { MenuInput } from './dto/input/menu.input';
import { UseGuards } from '@nestjs/common';
import { UserAuthGuard } from '../user/guards/user-auth.guard';
import { GetMenuArgs } from './dto/args/get-menu.args';
import { StoreGuard } from '../user/guards/role.guard';
import { CurrentId } from '../user/decorator/current-id.decorator';

@UseGuards(UserAuthGuard)
@Resolver(() => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Query(() => Menu, { name: 'menu' })
  getMenu(@Args() getMenuArgs: GetMenuArgs): Menu {
    return this.menuService.getMenu(getMenuArgs);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => Menu)
  createMenu(
    @CurrentId() storeId: string,
    @Args('createMenuInput') createMenuInput: MenuInput
  ): Menu {
    return this.menuService.createMenu(storeId, createMenuInput);
  }

  @UseGuards(StoreGuard)
  @Mutation(() => Menu)
  updateMenu(
    @CurrentId() storeId: string,
    @Args('updateMenuInput') updateMenuInput: MenuInput
  ): Menu {
    return this.menuService.updateMenu(storeId, updateMenuInput);
  }
}
