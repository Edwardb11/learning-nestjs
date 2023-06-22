import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { User } from 'src/users/entities/user.entity';
import { LoginDto } from '../models/login.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() login: LoginDto) {
    const user = await this.authService.validateUser(
      login.user.email,
      login.user.password,
    );
    // enviamos al usuario
    const sesion = this.authService.generateJWT(user);
    // retornamos la sesión
    return sesion;
  }
}
