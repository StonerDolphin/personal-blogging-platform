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

  async findAll(param: {
    skip?: number
    take?: number
    cursor?: Prisma.BlogWhereUniqueInput
    where?: Prisma.BlogWhereInput
    orderBy?: Prisma.BlogOrderByWithRelationInput
  }): Promise<Blog[]> {
    const {skip, take, cursor, where, orderBy} = param
    return this.prisma.blog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    })
  }  

  update() {}

  async delete(where: Prisma.BlogWhereUniqueInput): Promise<Blog> {
    return this.prisma.blog.delete({
      where,
    })
  }
}
