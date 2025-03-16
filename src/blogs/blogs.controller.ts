import { Body, Controller, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto } from './dto/blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogService: BlogsService){}

  @Post()
  create(@Body() blogDto: BlogDto) {
    this.blogService.create(blogDto)
    return 'blog created'
  }
}

