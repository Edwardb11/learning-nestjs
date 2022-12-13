import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post()
  createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }
}
