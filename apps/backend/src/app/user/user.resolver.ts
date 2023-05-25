import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/input/login.input';
import { UserService } from './user.service';
import { Token } from './models/token.entity';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Token)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<Token> {
    return await this.userService.login(loginInput);
  }
}
