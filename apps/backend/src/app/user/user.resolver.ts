import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/input/login.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<string> {
    return await this.userService.login(loginInput);
  }
}
