import { Column, Entity, Index } from 'typeorm';

@Index('pk_column', ['columnId'], { unique: true })
@Entity('my_column', { schema: 'public' })
export class MyColumn {
  @Column('character varying', { primary: true, name: 'column_id', length: 36 })
  columnId: string;

  @Column('character varying', { name: 'title', nullable: true, length: 128 })
  title: string | null;

  @Column('character varying', {
    name: 'cover_uuid',
    nullable: true,
    length: 32,
  })
  coverUuid: string | null;

  @Column('text', { name: 'introduction', nullable: true })
  introduction: string | null;

  @Column('character varying', {
    name: 'classification',
    nullable: true,
    length: 16,
  })
  classification: string | null;

  @Column('character', { name: 'type', nullable: true, length: 1 })
  type: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'author_user_id',
    nullable: true,
    length: 36,
  })
  authorUserId: string | null;

  @Column('character varying', {
    name: 'author_user_name',
    nullable: true,
    length: 16,
  })
  authorUserName: string | null;

  @Column('character varying', {
    name: 'pay_model',
    nullable: true,
    length: 16,
  })
  payModel: string | null;

  @Column('numeric', { name: 'price', nullable: true, precision: 5, scale: 1 })
  price: string | null;

  @Column('timestamp without time zone', {
    name: 'publish_time',
    nullable: true,
  })
  publishTime: Date | null;

  @Column('character', { name: 'is_rrecommend', nullable: true, length: 1 })
  isRrecommend: string | null;

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
