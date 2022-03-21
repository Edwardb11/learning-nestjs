import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-task.tdo';

@Controller('tasks')
export class TasksController {
  //  decorador Get
  @Get()
  // ruta atravez del metodo get y funciona atravez del metodo que esta abajo
  getTasks(): { hello: string } {
    return { hello: 'Obteniendo una tarea' };
  }
  @Post()
  createTasks(@Body() task: CreateTasksDto): string {
    console.log(task);
    return 'Creando una tarea';
  }
  @Put()
  updateTasks(): string {
    return 'Actualizando una tarea';
  }
  @Delete()
  deleteTasks(): string {
    return 'Eliminando una tarea';
  }
}
