import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './dto/input/login.input';
import { PrismaService } from '../prisma/prisma.service';
import { ForbiddenError } from '@nestjs/apollo';
import { Token } from './models/token.entity';
import { AccountTestInput } from './dto/args/account-test.args';
import { pbkdf2Sync } from 'crypto';

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
    private readonly prisma: PrismaService,
  ) {}

  async isAccountAvailable(
    accountTestInput: AccountTestInput,
  ): Promise<boolean> {
    let available = false;
    await this.prisma.user
      .findUniqueOrThrow({
        where: {
          account: accountTestInput.account,
        },
      })
      .catch((err) => {
        available = true;
      });
    return available;
  }

  async login(loginInput: LoginInput): Promise<Token> {
    let role = 'customer';
    let data = await this.prisma.customer.findFirst({
      where: {
        user: {
          account: loginInput.account,
        },
      },
      select: {
        id: true,
        user: {
          select: {
            password: true,
            salt: true,
            avatar: {
              select: {
                data: true,
              },
            },
          },
        },
      },
    });

    if (data === null) {
      await this.prisma.store
        .findFirstOrThrow({
          where: {
            user: {
              account: loginInput.account,
            },
          },
          select: {
            id: true,
            user: {
              select: {
                password: true,
                salt: true,
                avatar: {
                  select: {
                    data: true,
                  },
                },
              },
            },
          },
        })
        .then((res) => {
          data = res;
          role = 'store';
        })
        .catch(() => {
          throw new ForbiddenError('Login Failed');
        });
      console.log(data);
    }

    const saltedPassword = pbkdf2Sync(
      loginInput.password,
      data.user.salt,
      10000,
      64,
      'sha256',
    ).toString('hex');

    console.log('salted password: ' + saltedPassword);
    console.log(data.user.password);

    if (saltedPassword === data.user.password) {
      const token = this.jwtService.sign({
        id: data.id,
        role: role,
      });

      return { token, role, avatar: data.user.avatar.data };
    } else {
      throw new ForbiddenError('Login Failed');
    }
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
