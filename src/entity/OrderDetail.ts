import { Column, Entity, Index } from 'typeorm';

@Index('pk_order_detail', ['detailId'], { unique: true })
@Entity('order_detail', { schema: 'public' })
export class OrderDetail {
  @Column('character varying', { primary: true, name: 'detail_id', length: 36 })
  detailId: string;

  @Column('character varying', {
    name: 'order_no',
    nullable: true,
    length: 255,
  })
  orderNo: string | null;

  @Column('character varying', { name: 'user_id', nullable: true, length: 36 })
  userId: string | null;

  @Column('character', { name: 'shopping_type', nullable: true, length: 1 })
  shoppingType: string | null;

  @Column('character varying', {
    name: 'shopping_id',
    nullable: true,
    length: 36,
  })
  shoppingId: string | null;

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

  @Column('character varying', {
    name: 'shopping_name',
    nullable: true,
    length: 255,
  })
  shoppingName: string | null;

  @Column('numeric', {
    name: 'current_unit_price',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  currentUnitPrice: string | null;

  @Column('integer', { name: 'shopping_num', nullable: true })
  shoppingNum: number | null;

  @Column('numeric', {
    name: 'total_price',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalPrice: string | null;

  @Column('timestamp without time zone', { name: 'send_time', nullable: true })
  sendTime: Date | null;

  @Column('date', { name: 'end_time', nullable: true })
  endTime: string | null;
}
