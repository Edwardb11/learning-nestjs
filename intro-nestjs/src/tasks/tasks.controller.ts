import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
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

  // parametro llamado id
  @Delete(':id')
  deleteTasks(@Param('id') id): string {
    console.log(id);
    return `Eliminando una tarea numero: ${id}`;
  }
}
