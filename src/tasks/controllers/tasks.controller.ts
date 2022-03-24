import { TasksService } from './../services/tasks.service';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('api/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return 'hello';
  }

  @Get()
  findOne() {
    return 'hello';
  }

  @Post()
  create() {
    return 'hello';
  }

  @Put()
  update() {
    return 'hello';
  }

  @Delete()
  delete() {
    return 'hello';
  }
}
