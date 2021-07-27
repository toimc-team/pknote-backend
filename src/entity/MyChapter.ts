import { Column, Entity, Index } from 'typeorm';

@Index('pk_my_chapter', ['chapterId'], { unique: true })
@Entity('my_chapter', { schema: 'public' })
export class MyChapter {
  @Column('character varying', {
    primary: true,
    name: 'chapter_id',
    length: 36,
  })
  chapterId: string;

  @Column('character varying', {
    name: 'column_id',
    nullable: true,
    length: 36,
  })
  columnId: string | null;

  @Column('character varying', {
    name: 'chapter_name',
    nullable: true,
    length: 128,
  })
  chapterName: string | null;

  @Column('numeric', { name: 'price', nullable: true, precision: 5, scale: 1 })
  price: string | null;

  @Column('character varying', {
    name: 'parent_id',
    nullable: true,
    length: 36,
  })
  parentId: string | null;

  @Column('integer', { name: 'sort', nullable: true })
  sort: number | null;

  @Column('character varying', {
    name: 'creator_user_id',
    nullable: true,
    length: 36,
  })
  creatorUserId: string | null;

  @Column('character varying', {
    name: 'creator_name',
    nullable: true,
    length: 16,
  })
  creatorName: string | null;

  @Column('timestamp without time zone', {
    name: 'create_time',
    nullable: true,
  })
  createTime: Date | null;

  @Column('character varying', {
    name: 'update_user_id',
    nullable: true,
    length: 36,
  })
  updateUserId: string | null;

  @Column('character varying', {
    name: 'updater_name',
    nullable: true,
    length: 16,
  })
  updaterName: string | null;

  @Column('timestamp without time zone', {
    name: 'update_time',
    nullable: true,
  })
  updateTime: Date | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
