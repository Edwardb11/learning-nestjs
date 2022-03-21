import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  //  decorador Get
  @Get()
  // ruta atravez del metodo get y funciona atravez del metodo que esta abajo
  getTasks() {
    return 'tasks';
  }
}
