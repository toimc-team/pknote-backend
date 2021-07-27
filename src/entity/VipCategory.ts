import { Column, Entity, Index } from 'typeorm';

@Index('pk_vip_category', ['categoryId'], { unique: true })
@Entity('vip_category', { schema: 'public' })
export class VipCategory {
  @Column('character varying', {
    primary: true,
    name: 'category_id',
    length: 36,
  })
  categoryId: string;

  @Column('character varying', {
    name: 'category_name',
    nullable: true,
    length: 255,
  })
  categoryName: string | null;

  @Column('integer', { name: 'efdays', nullable: true })
  efdays: number | null;

  @Column('numeric', { name: 'price', nullable: true, precision: 10, scale: 2 })
  price: string | null;

  @Column('text', { name: 'vip_introduction', nullable: true })
  vipIntroduction: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('integer', { name: 'times_num', nullable: true })
  timesNum: number | null;

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

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
