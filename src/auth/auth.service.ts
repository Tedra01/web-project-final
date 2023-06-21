import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string) {
    const payload = { username, role: 'user' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
