import { ConfigType } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import config from 'config';
import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      // inyectamos la configuracíon
      inject: [config.KEY],
      // inyectamos el tipo de config en el use factory
      useFactory: (configiService: ConfigType<typeof config>) => {
        return {
          // le debemos enviar un secreto que será una variable de ambiente
          secret: configiService.JWT_SECRET,
          signOptions: {
            // especificamos en cuanto tiempo expirará el token, por ende, la sesión
            // se vence en 10 días
            expiresIn: '10d',
          },
        };
      },
    }),

    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '1d' },
    // }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
