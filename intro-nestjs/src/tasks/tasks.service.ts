import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTasksDto } from './dto/create-task.tdo';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }
  async getTask(id: string) {
    await this.taskModel.findById(id);
  }

  async createTask(task: CreateTasksDto) {
    // Creando un nuevo  modelo
    const newTask = new this.taskModel(task);
    // para guardar
    console.log(newTask);
    return await newTask.save();
  }
  // tasks: Task[] = [
  //   {
  //     id: 1,
  //     title: 'Testing',
  //     description: 'Testing descripcion',
  //     done: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Testing 2',
  //     description: 'Testing descripcion 2',
  //     done: false,
  //   },
  // ];
  // getTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTask(id: number): Task {
  //   return this.tasks.find((task) => task.id === id);
  // }
}
