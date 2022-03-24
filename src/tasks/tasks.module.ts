import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './controllers/tasks.controller';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';
import { TasksService } from './services/tasks.service';

@Module({
  imports: [TypeOrmModule, User, Profile],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
