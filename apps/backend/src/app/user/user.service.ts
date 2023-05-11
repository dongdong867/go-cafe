import { BadRequestException, Injectable } from '@nestjs/common';
import { Customer } from './customer/models/customer.entity';
import { Store } from './store/models/store.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './dto/input/login.input';

type PayloadType = {
  account: string;
  role: string;
  iat: number;
};

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}

  login(loginInput: LoginInput) {
    let role = '';
    if (loginInput.account === 'test customer') role = 'customer';
    else if (loginInput.account === 'test store') role = 'store';
    else throw new BadRequestException('Login Failed');

    const token = this.jwtService.sign({
      account: loginInput.account,
      role: role,
    });

    return token;
  }

  validateToken(token: string): {
    isValidate: boolean;
    user: Customer | Store;
    role: string;
  } {
    const decodedToken = this.jwtService.decode(token) as PayloadType;

    if (decodedToken.role === 'customer') {
      // TODO: REPLACE FAKE DATA WITH DB DATA
      //
      const user: Customer = {
        name: 'test customer',
        phone: '0912345678',
        postCount: 0,
        followCount: 0,
        email: 'customer@example.com',
        following: [],
      };
      return { isValidate: true, user: user, role: 'customer' };
    } else if (decodedToken.role === 'store') {
      const user: Store = {
        address: 'store address',
        info: 'store info',
        name: 'test store',
        phone: '0912345678',
        postCount: 0,
      };
      return { isValidate: true, user: user, role: 'store' };
    }
  }
}
