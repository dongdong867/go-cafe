import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = GqlExecutionContext.create(context).getContext().req;
    const authHeader = req.headers.authorization as string;

    if (!authHeader) {
      throw new BadRequestException('Authorization header not found.');
    }

    const { isValidate, id, role } = await this.userService.validateToken(
      authHeader,
    );

    if (isValidate) {
      req.id = id;
      req.role = role;
      return true;
    }
    throw new UnauthorizedException('Token not valid');
  }
}
