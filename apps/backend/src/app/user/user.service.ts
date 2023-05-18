import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './dto/input/login.input';
import { PrismaService } from '../prisma/prisma.service';
import { ForbiddenError } from '@nestjs/apollo';

type PayloadType = {
  id: string;
  account: string;
  role: string;
  iat: number;
};

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async login(loginInput: LoginInput) {
    let role = '';
    let data = await this.prisma.customer.findFirst({
      where: {
        User: {
          account: loginInput.account,
          password: loginInput.password,
        },
      },
      select: {
        id: true,
      },
    });

    if (data === null) {
      data = await this.prisma.store
        .findFirstOrThrow({
          where: {
            User: {
              account: loginInput.account,
              password: loginInput.password,
            },
          },
          select: {
            id: true,
          },
        })
        .catch(() => {
          throw new ForbiddenError('login failed');
        });
      role = 'store';
    } else {
      role = 'customer';
    }

    const token = this.jwtService.sign({
      id: data.id,
      role: role,
    });

    return token;
  }

  validateToken(token: string): {
    isValidate: boolean;
    id: string;
    role: 'customer' | 'store';
  } {
    const decodedToken = this.jwtService.decode(token) as PayloadType;

    if (decodedToken.role === 'customer') {
      return {
        isValidate: true,
        id: decodedToken.id,
        role: 'customer',
      };
    } else if (decodedToken.role === 'store') {
      return {
        isValidate: true,
        id: decodedToken.id,
        role: 'store',
      };
    }
  }
}
