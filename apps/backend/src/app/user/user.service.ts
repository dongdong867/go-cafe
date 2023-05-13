import { BadRequestException, Injectable } from '@nestjs/common';
import { Customer } from './customer/models/customer.entity';
import { Store } from './store/models/store.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './dto/input/login.input';
import { v4 as uuidv4 } from 'uuid';

type PayloadType = {
  id: string;
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
      id: uuidv4(),
      role: role,
    });

    return token;
  }

  validateToken(token: string): {
    isValidate: boolean;
    id: string;
    user: Customer | Store;
    role: string;
  } {
    const decodedToken = this.jwtService.decode(token) as PayloadType;

    if (decodedToken.role === 'customer') {
      // TODO: REPLACE FAKE DATA WITH DB DATA
      //
      const user: Customer = {
        account: 'test customer account',
        name: 'test customer',
        phone: '0912345678',
        postCount: 0,
        followCount: 0,
        email: 'customer@example.com',
        following: [],
      };
      return {
        isValidate: true,
        id: decodedToken.id,
        user: user,
        role: 'customer',
      };
    } else if (decodedToken.role === 'store') {
      const user: Store = {
        account: 'test store account',
        address: 'store address',
        info: 'store info',
        name: 'test store',
        phone: '0912345678',
        postCount: 0,
      };
      return {
        isValidate: true,
        id: decodedToken.id,
        user: user,
        role: 'store',
      };
    }
  }
}
