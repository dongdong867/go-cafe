import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  certifyUser(account: string, token: string): boolean {
    return true;
  }
}
