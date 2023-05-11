import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/input/login.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String)
  login(@Args('loginInput') loginInput: LoginInput): string {
    return this.userService.login(loginInput);
  }
}
