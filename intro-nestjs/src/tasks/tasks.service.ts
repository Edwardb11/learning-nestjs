import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Testing',
      description: 'Testing descripcion',
      done: true,
    },
    {
      id: 2,
      title: 'Testing 2',
      description: 'Testing descripcion 2',
      done: false,
    },
  ];
  getTasks(): Task[] {
    return this.tasks;
  }
  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
