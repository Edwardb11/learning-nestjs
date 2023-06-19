import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    const authHeader = request.header('Auth');
    const isAuth = authHeader === '1234';
    if (isPublic) {
      return true;
    }
    if (!isAuth) {
      throw new UnauthorizedException('not_allowed');
    }
    return isAuth;
  }
}
