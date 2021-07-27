import { Column, Entity, Index } from 'typeorm';

@Index('pk_user_shipping', ['shippingId'], { unique: true })
@Entity('user_shipping', { schema: 'public' })
export class UserShipping {
  @Column('character varying', {
    primary: true,
    name: 'shipping_id',
    length: 36,
  })
  shippingId: string;

  @Column('character varying', { name: 'user_id', nullable: true, length: 256 })
  userId: string | null;

  @Column('character varying', {
    name: 'user_name',
    nullable: true,
    length: 36,
  })
  userName: string | null;

  @Column('character varying', {
    name: 'receiver_phone',
    nullable: true,
    length: 16,
  })
  receiverPhone: string | null;

  @Column('character varying', {
    name: 'receiver_mobile',
    nullable: true,
    length: 16,
  })
  receiverMobile: string | null;

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
    name: 'updater_time',
    nullable: true,
  })
  updaterTime: Date | null;

  @Column('character varying', {
    name: 'receiver_province',
    nullable: true,
    length: 20,
  })
  receiverProvince: string | null;

  @Column('character varying', {
    name: 'receiver_city',
    nullable: true,
    length: 20,
  })
  receiverCity: string | null;

  @Column('character varying', {
    name: 'receiver_district',
    nullable: true,
    length: 20,
  })
  receiverDistrict: string | null;

  @Column('character varying', {
    name: 'receiver_address',
    nullable: true,
    length: 255,
  })
  receiverAddress: string | null;

  @Column('character varying', {
    name: 'receiver_zip',
    nullable: true,
    length: 20,
  })
  receiverZip: string | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
