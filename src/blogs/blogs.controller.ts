import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto } from './dto/blog.dto';
import { Blog as BlogModel } from '@prisma/client';

@Controller('blogs')
export class BlogsController {
  constructor(private service: BlogsService) {}

  @Get()
  hello() {
    return 'blogs';
  }

  @Post('/create')
  async create(@Body() blogDto: BlogDto) {
    await this.service.create(blogDto);
  }

  @Get('findOne/:id')
  async getBlogById(@Param('id') id: string): Promise<BlogModel | null> {
    return await this.service.findOne({ id: Number(id) });
  }

  @Get('/findAll')
  async getAll(): Promise<BlogModel[]> {
    return this.service.findAll({
      where: {publishDate: '20-10-2025'}
    })
  }

  @Delete('delete/:id')
  async deleteBlog(@Param('id') id: string): Promise<BlogModel> {
    return await this.service.delete({ id: Number(id) });
  }
}