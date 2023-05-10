import { Injectable } from '@nestjs/common';
import { Customer } from './customer/models/customer.entity';
import { Store } from './store/models/store.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}
  validateToken(token: string): {
    isValidate: boolean;
    user: Customer | Store;
  } {
    const decodedToken = this.jwtService.decode(token);
    console.log(decodedToken);

    // TODO: REPLACE FAKE DATA WITH DB DATA
    //
    const customer: Customer = {
      name: 'test name',
      phone: '0912345678',
      postCount: 0,
      followCount: 0,
      email: 'test@example.com',
      following: [],
    };
    return { isValidate: true, user: customer };
  }
}
