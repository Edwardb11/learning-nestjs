import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './controllers/tasks.controller';
import { Profile } from './entities/profile.entity';
import { Task } from './entities/task.entity';
import { User } from './entities/user.entity';
import { TasksService } from './services/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User, Profile])],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
