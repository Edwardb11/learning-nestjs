import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './../services/user.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Tasks Users')
@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  // REST API
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }
}
