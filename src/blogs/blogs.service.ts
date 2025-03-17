import { Injectable } from '@nestjs/common';
import { Blog } from './interface/blog.interface';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BlogsService {
  constructor(private repo: PrismaClient) {}

  create(blog: Blog) {
    this.repo.blog.create({
      data: {
        id: blog.id,
        title: blog.title,
        publishDate: blog.publishDate,
        content: blog.content,
        tag: blog.tag,
      },
    });
  }

  findAll() {}

  findOne() {}

  update() {}

  delete() {}
}
