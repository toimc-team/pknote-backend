import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyContent } from '@/entity/MyContent';

@Module({
  imports: [TypeOrmModule.forFeature([MyContent])],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
