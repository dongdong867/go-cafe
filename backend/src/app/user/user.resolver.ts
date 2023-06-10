import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/input/login.input';
import { UserService } from './user.service';
import { Token } from './models/token.entity';
import { AccountTestInput } from './dto/args/account-test.args';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Boolean)
  async isAccountAvailable(
    @Args() accountTestInput: AccountTestInput,
  ): Promise<boolean> {
    return await this.userService.isAccountAvailable(accountTestInput);
  }

  @Mutation(() => Token)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<Token> {
    return await this.userService.login(loginInput);
  }
}
