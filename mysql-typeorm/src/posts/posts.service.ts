import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
    private userSerivice: UsersService,
  ) {}
  async createPost(posts: CreatePostDto) {
    const userFound = await this.userSerivice.getUser(posts.authorId);
    if (!userFound)
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    const newPost = this.postRepository.create(posts);
    return this.postRepository.save(newPost);
  }

  getPosts() {
    return this.postRepository.find({
      relations: ['auhtor'],
    });
  }
}
