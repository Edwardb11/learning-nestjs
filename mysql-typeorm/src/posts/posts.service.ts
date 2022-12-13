import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private userSerivice: UsersService,
  ) {}
  async createPost(post: CreatePostDto) {
    const userFound = await this.userSerivice.getUser(post.authorId);
    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  getPost() {
    return this.postRepository.find();
  }
}
