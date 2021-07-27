import { Column, Entity, Index } from 'typeorm';

@Index('pk_funds_withdraw', ['withdrawId'], { unique: true })
@Entity('funds_withdraw', { schema: 'public' })
export class FundsWithdraw {
  @Column('character varying', {
    primary: true,
    name: 'withdraw_id',
    length: 36,
  })
  withdrawId: string;

  @Column('character varying', {
    name: 'account_id',
    nullable: true,
    length: 36,
  })
  accountId: string | null;

  @Column('numeric', {
    name: 'withdraw_money',
    nullable: true,
    precision: 20,
    scale: 2,
  })
  withdrawMoney: string | null;

  @Column('numeric', {
    name: 'actual_money',
    nullable: true,
    precision: 20,
    scale: 2,
  })
  actualMoney: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'wechat_no',
    nullable: true,
    length: 255,
  })
  wechatNo: string | null;

  @Column('character varying', {
    name: 'fail_reason',
    nullable: true,
    length: 255,
  })
  failReason: string | null;

  @Column('timestamp without time zone', {
    name: 'complete_time',
    nullable: true,
  })
  completeTime: Date | null;

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
