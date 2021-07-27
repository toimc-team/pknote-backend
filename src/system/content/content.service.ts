import { Injectable, HttpException } from '@nestjs/common';
import { MyContent } from '@/entity/MyContent';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { v4 as uuid } from 'uuid';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(MyContent)
    private readonly contentRepository: Repository<MyContent>,
  ) {}

  // 查询当前用户名下的content
  async findMyList(userId: string): Promise<MyContent[]> {
    return await this.contentRepository.find({ authorUserId: userId });
  }

  // 根据id查询content
  async findOne(id: string): Promise<MyContent> {
    return await this.contentRepository.findOne({ contentId: id });
  }

  // 根据id修改content
  async update(dto: UpdateContentDto): Promise<any> {
    const existing = await this.contentRepository.findOne(dto.contentId);
    if (!existing)
      throw new HttpException(
        `更新失败，ID 为 ${dto.contentId} 的内容不存在`,
        404,
      );
    const content: MyContent = <MyContent>Object.assign(existing, dto);
    return await this.contentRepository.save(content);
  }

  // 创建内容
  async create(dto: CreateContentDto, userId: string): Promise<any> {
    let newContent = new MyContent();
    newContent.contentId = uuid();
    newContent.authorUserId = userId;
    newContent = { ...dto, ...newContent };
    return this.contentRepository.save(newContent);
  }
}
