import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto } from './dto/blog.dto';

@Controller()
export class BlogsController {
  constructor(private service: BlogsService){}

  @Post()
  create(@Body() blogDto: BlogDto) {
  
  }

  @Get()
  getText(){
    return 'blogs'
  }
}

