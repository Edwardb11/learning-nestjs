import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  completed: boolean;

  // Una tarea puede tener varias categorias RELACION DE MUCHO A MUCHO
  @ManyToMany(() => Category, (category) => category.tasks)
  categories: Category[];
}
