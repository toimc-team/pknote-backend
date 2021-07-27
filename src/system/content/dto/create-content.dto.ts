import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContentDto {
  @ApiProperty({ description: '内容标题' })
  @IsNotEmpty({ message: '内容标题不能为空' })
  readonly title: string;

  @ApiProperty({ description: '内容简介' })
  @IsNotEmpty({ message: '简介不能为空' })
  readonly introduction: string;

  @ApiProperty({ description: '课程内容' })
  @IsNotEmpty({ message: '内容不能为空' })
  readonly content: string;

  @ApiProperty({ description: '课程价格' })
  @IsNotEmpty({ message: '课程价格不能为空' })
  readonly price: number;
}
