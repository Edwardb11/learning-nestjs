import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from './schemas/task.schemas';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: taskSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
