import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-ser.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<User> {
    return this.usersService.createUser(newUser);
  }
}
