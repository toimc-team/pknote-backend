import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Param,
  Put,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateContentDto } from './dto/create-content.dto';
import { AuthGuard } from '@nestjs/passport';
import { MyContent } from '@/entity/MyContent';
import { UpdateContentDto } from './dto/update-content.dto';

@ApiTags('我的内容')
@Controller('content')
@UseGuards(AuthGuard('jwt'))
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('list')
  @ApiOperation({ summary: '获取当前用户名下的内容' })
  async findMyList(@Request() req): Promise<any[]> {
    const { userId } = req.user;
    return this.contentService.findMyList(userId);
  }

  @Put()
  @ApiOperation({ summary: '根据id修改我的内容' })
  async update(@Body() dto: UpdateContentDto): Promise<any> {
    return this.contentService.update(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id查找内容' })
  async findOne(@Param('id') id: string): Promise<MyContent> {
    return this.contentService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: '创建我的内容' })
  async create(
    @Body() newContent: CreateContentDto,
    @Request() req,
  ): Promise<unknown> {
    const { userId } = req.user;
    return this.contentService.create(newContent, userId);
  }
}
