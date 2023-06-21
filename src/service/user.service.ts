import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getMe() {
    return { message: 'User Info' };
  }
}
