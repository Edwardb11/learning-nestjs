import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepotory: Repository<Post>,
  ) {}
  async getMany(): Promise<Post[]> {
    return await this.postRepotory.find();
  }
  getOne(id: number) {
    return { ok: 'getOne' };
  }
  createOne(dto: CreatePostDto) {
    return { ok: 'createOne' };
  }
  editOne(id: number, dto: EditPostDto) {
    return { ok: 'editOne' };
  }
  deleteOne(id: number) {
    return { ok: 'deleteOne' };
  }
}
