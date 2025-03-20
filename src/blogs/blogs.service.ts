import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Blog } from '@prisma/client';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

 async create(data: Prisma.BlogCreateInput): Promise<Blog> {
  return this.prisma.blog.create({
    data
  })
 }

  async findOne(id: Prisma.BlogWhereUniqueInput): Promise<Blog | null> {
    return this.prisma.blog.findUnique({
      where: id
    })
  }

  findAll() {}  

  update() {}

  delete() {}
}
