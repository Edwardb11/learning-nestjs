import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../models/login.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() login: LoginDto) {
    const { email, password } = login;
    // validamos al usuario

    const user = await this.authService.validateUser(email, password);
    // enviamos al usuario

    const sesion = await this.authService.generateJWT(user);
    // retornamos la sesión

    return sesion;
  }
}
