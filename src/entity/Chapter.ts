import { Column, Entity, Index } from 'typeorm';

@Index('chapter_pkey', ['columnId'], { unique: true })
@Entity('chapter', { schema: 'public' })
export class Chapter {
  @Column('character varying', { primary: true, name: 'column_id', length: 36 })
  columnId: string;

  @Column('character varying', {
    name: 'chapter_id',
    nullable: true,
    length: 36,
  })
  chapterId: string | null;

  @Column('character varying', {
    name: 'chapter_name',
    nullable: true,
    length: 255,
  })
  chapterName: string | null;

  @Column('numeric', { name: 'price', nullable: true, precision: 10, scale: 2 })
  price: string | null;

  @Column('character varying', {
    name: 'parent_id',
    nullable: true,
    length: 36,
  })
  parentId: string | null;

  @Column('integer', { name: 'creator_user_id', nullable: true })
  creatorUserId: number | null;
}
