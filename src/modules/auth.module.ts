import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthService } from '../auth/auth.service';
import { AuthController } from '../auth/auth.controller';
import { RolesGuard } from '../auth/roles.guard';
import { Reflector } from '@nestjs/core';


@Module({
    imports: [
        JwtModule.register({
          secret: 'xvideos',
          signOptions: { expiresIn: '1h' },
        }),
      ],
    providers: [AuthService, JwtStrategy,RolesGuard, Reflector],
    controllers: [AuthController],
})
export class AuthModule {}
