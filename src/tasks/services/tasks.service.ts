import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './../entities/task.entity';
import { TasksDto } from './../dtos/crerate-tasks.dto';
import { Category } from '../entities/category.entity';
import { PaginationQueryDto } from '../dtos';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepo: Repository<Task>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  async findAll({ limit, offset }: PaginationQueryDto) {
    return await this.tasksRepo.find({ skip: offset, take: limit });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id, {
      relations: ['categories'],
    });
  }

  async create(body: TasksDto) {
    const newTask = new Task();
    newTask.name = body.name;
    const categoriesIds = body.categoriesIds;
    const categories = await this.categoryRepo.findByIds(categoriesIds);
    newTask.categories = categories;
    return this.tasksRepo.save(newTask);
  }

  async update(id: number, body: TasksDto) {
    const task = await this.tasksRepo.findOne(id);
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async remove(id: number) {
    await this.tasksRepo.delete(id);
    return true;
  }
}
