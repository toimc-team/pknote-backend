import { Column, Entity, Index } from 'typeorm';

@Index('pk_funds_account', ['accountId'], { unique: true })
@Entity('funds_account', { schema: 'public' })
export class FundsAccount {
  @Column('character varying', {
    primary: true,
    name: 'account_id',
    length: 36,
  })
  accountId: string;

  @Column('character varying', { name: 'user_id', nullable: true, length: 36 })
  userId: string | null;

  @Column('numeric', {
    name: 'cumulative_income',
    nullable: true,
    precision: 20,
    scale: 2,
  })
  cumulativeIncome: string | null;

  @Column('numeric', {
    name: 'current_balance',
    nullable: true,
    precision: 20,
    scale: 2,
  })
  currentBalance: string | null;

  @Column('numeric', { name: 'cash', nullable: true, precision: 20, scale: 2 })
  cash: string | null;

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
