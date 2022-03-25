import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  // Relacion bidirecional para dentro de categoria obtener las tareas
  @ManyToMany(() => Task, (task) => task.categories)
  // Para expresar como se llama tabla
  @JoinTable({
    name: 'tasks_categories',
    joinColumn: {
      name: 'task_id',
    },
    inverseJoinColumn: {
      name: 'category_id',
    },
  })
  tasks: Task[];
}
