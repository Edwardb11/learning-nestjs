import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-32.railway.app',
      port: 5668,
      username: 'root',
      password: '8EvCf48Yd1bB7vI52mmR',
      database: 'railway',
      entities: [Post],
      synchronize: true,
    }),

    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
