import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto } from './dto/blog.dto';
import { Blog as BlogModel } from '@prisma/client';

@Controller()
export class BlogsController {
  constructor(private service: BlogsService){}

  @Post('/create')
 async create(@Body() blogDto: BlogDto) {
    await this.service.create(blogDto)
  }

  @Get('findOne/:id')
  async getBlogById(@Param('id') id: string): Promise<BlogModel | null>{
    return await this.service.findOne({id: Number(id)})
  }
}

