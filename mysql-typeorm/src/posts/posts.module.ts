import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Posts } from './posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts]), UsersModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
