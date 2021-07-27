import { Column, Entity, Index } from 'typeorm';

@Index('pk_my_content', ['contentId'], { unique: true })
@Entity('my_content', { schema: 'public' })
export class MyContent {
  @Column('character varying', {
    primary: true,
    name: 'content_id',
    length: 36,
  })
  contentId: string;

  @Column('character varying', { name: 'title', nullable: true, length: 128 })
  title: string | null;

  @Column('character varying', {
    name: 'introduction',
    nullable: true,
    length: 128,
  })
  introduction: string | null;

  @Column('character varying', {
    name: 'cover_uuid',
    nullable: true,
    length: 36,
  })
  coverUuid: string | null;

  @Column('character', { name: 'type', nullable: true, length: 1 })
  type: string | null;

  @Column('text', { name: 'content', nullable: true })
  content: string | null;

  @Column('character varying', {
    name: 'media_uuid',
    nullable: true,
    length: 36,
  })
  mediaUuid: string | null;

  @Column('text', { name: 'reference', nullable: true })
  reference: string | null;

  @Column('character varying', {
    name: 'author_user_id',
    nullable: true,
    length: 36,
  })
  authorUserId: string | null;

  @Column('character varying', {
    name: 'author_name',
    nullable: true,
    length: 16,
  })
  authorName: string | null;

  @Column('character varying', {
    name: 'column_id',
    nullable: true,
    length: 36,
  })
  columnId: string | null;

  @Column('character varying', {
    name: 'chapter_id',
    nullable: true,
    length: 36,
  })
  chapterId: string | null;

  @Column('character varying', {
    name: 'pay_model',
    nullable: true,
    length: 16,
  })
  payModel: string | null;

  @Column('character', { name: 'is_try', nullable: true, length: 1 })
  isTry: string | null;

  @Column('numeric', { name: 'price', nullable: true, precision: 5, scale: 1 })
  price: number | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character', { name: 'is_recommend', nullable: true, length: 1 })
  isRecommend: string | null;

  @Column('timestamp without time zone', {
    name: 'publish_time',
    nullable: true,
  })
  publishTime: Date | null;

  @Column('numeric', { name: 'view_num', nullable: true })
  viewNum: string | null;

  @Column('numeric', { name: 'subscribe_num', nullable: true })
  subscribeNum: string | null;

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
    name: 'updater_user_id',
    nullable: true,
    length: 36,
  })
  updaterUserId: string | null;

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

  @Column('character', { name: 'org_nature', nullable: true, length: 1 })
  orgNature: string | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
