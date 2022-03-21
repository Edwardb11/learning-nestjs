import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateTasksDto } from './dto/create-task.tdo';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  // instanciar servicio
  constructor(private tasksService: TasksService) {}

  //  decorador Get
  @Get()
  // ruta atravez del metodo get y funciona atravez del metodo que esta abajo
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }
  // utilizando express
  // getTask(@Req() req, @Res() res): Response {
  //   return res.send('hello');
  // }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.tasksService.getTask(taskId);
  }
  @Post()
  createTasks(@Body() task: CreateTasksDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }
  @Put(':id')
  updateTasks(@Body() task: CreateTasksDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Actualizando una tarea';
  }

  // parametro llamado id
  @Delete(':id')
  deleteTasks(@Param('id') id): string {
    console.log(id);
    return `Eliminando una tarea numero: ${id}`;
  }
}
