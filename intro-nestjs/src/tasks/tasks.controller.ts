import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  //  decorador Get
  @Get()
  // ruta atravez del metodo get y funciona atravez del metodo que esta abajo
  getTasks(): string {
    return 'Obteniendo una tarea';
  }
  @Post()
  createTasks(): string {
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
