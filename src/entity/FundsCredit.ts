import { Column, Entity, Index } from 'typeorm';

@Index('pk_funds_credit', ['creditId'], { unique: true })
@Entity('funds_credit', { schema: 'public' })
export class FundsCredit {
  @Column('character varying', { primary: true, name: 'credit_id', length: 36 })
  creditId: string;

  @Column('character varying', {
    name: 'credit_no',
    nullable: true,
    length: 36,
  })
  creditNo: string | null;

  @Column('character varying', {
    name: 'payment_account',
    nullable: true,
    length: 36,
  })
  paymentAccount: string | null;

  @Column('character varying', {
    name: 'payment_name',
    nullable: true,
    length: 255,
  })
  paymentName: string | null;

  @Column('numeric', {
    name: 'credit_num',
    nullable: true,
    precision: 20,
    scale: 2,
  })
  creditNum: string | null;

  @Column('timestamp without time zone', {
    name: 'credit_time',
    nullable: true,
  })
  creditTime: Date | null;

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
