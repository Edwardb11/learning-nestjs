import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}
  async getMany(): Promise<Post[]> {
    return await this.postRepository.find();
  }
  async getOne(id: number) {
    const post = await this.postRepository.findOne(id);
    if (!post)
      throw new NotFoundException('Post does not exist or unauthorized');
    return post;
  }
  async createOne(dto: CreatePostDto) {
    const post = this.postRepository.create(dto);
    return await this.postRepository.save(post);
  }
  async editOne(id: number, dto: EditPostDto) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('No existe el elemento solicitado');
    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }
  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }
}
