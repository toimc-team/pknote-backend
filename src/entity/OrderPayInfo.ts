import { Column, Entity, Index } from 'typeorm';

@Index('pk_order_pay_info', ['payinfoId'], { unique: true })
@Entity('order_pay_info', { schema: 'public' })
export class OrderPayInfo {
  @Column('character varying', {
    primary: true,
    name: 'payinfo_id',
    length: 36,
  })
  payinfoId: string;

  @Column('character varying', {
    name: 'order_no',
    nullable: true,
    length: 255,
  })
  orderNo: string | null;

  @Column('character varying', { name: 'user_id', nullable: true, length: 36 })
  userId: string | null;

  @Column('character', { name: 'pay_platform', nullable: true, length: 1 })
  payPlatform: string | null;

  @Column('character varying', {
    name: 'platform_num',
    nullable: true,
    length: 255,
  })
  platformNum: string | null;

  @Column('character', { name: 'platform_status', nullable: true, length: 1 })
  platformStatus: string | null;

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
