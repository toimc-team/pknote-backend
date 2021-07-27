import { Column, Entity, Index, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Index('pk_user', ['userId'], { unique: true })
@Entity('user_info', { schema: 'public' })
export class UserInfo extends BaseEntity {
  @Column('character varying', { primary: true, name: 'user_id', length: 36 })
  userId: string;

  @Column('character varying', {
    name: 'login_name',
    nullable: true,
    length: 16,
  })
  loginName: string | null;

  @Column('character varying', { name: 'pwd', nullable: true, length: 128 })
  pwd: string | null;

  @Column('character varying', { name: 'nickname', nullable: true, length: 16 })
  nickname: string | null;

  @Column('character varying', {
    name: 'user_avatar',
    nullable: true,
    length: 36,
  })
  userAvatar: string | null;

  @Column('numeric', {
    name: 'phone',
    unique: true,
    nullable: true,
    precision: 11,
    scale: 0,
  })
  phone: string | null;

  @Column('character varying', {
    name: 'email',
    unique: true,
    nullable: true,
    length: 48,
  })
  email: string | null;

  @Column('character varying', {
    name: 'user_name',
    nullable: true,
    length: 16,
  })
  userName: string | null;

  @Column('character', { name: 'sex', nullable: true, length: 1 })
  sex: string | null;

  @Column('numeric', {
    name: 'identity_num',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  identityNum: string | null;

  @Column('date', { name: 'birthday', nullable: true })
  birthday: string | null;

  @Column('character varying', {
    name: 'role_ids',
    nullable: true,
    length: 3600,
  })
  roleIds: string | null;

  @Column('character varying', {
    name: 'role_name',
    nullable: true,
    length: 16,
  })
  roleName: string | null;

  @Column('character varying', { name: 'org_id', nullable: true, length: 36 })
  orgId: string | null;

  @Column('timestamp without time zone', { name: 'sign_time', nullable: true })
  signTime: Date | null;

  @Column('character varying', {
    name: 'tags_ids',
    nullable: true,
    length: 512,
  })
  tagsIds: string | null;

  @Column('numeric', {
    name: 'amount_spent',
    nullable: true,
    precision: 8,
    scale: 1,
  })
  amountSpent: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('numeric', { name: 'record', nullable: true })
  record: string | null;

  @Column('character varying', { name: 'vip_category_id', nullable: true })
  vipCategoryId: string | null;

  @Column('timestamp without time zone', { name: 'vip_eftime', nullable: true })
  vipEftime: Date | null;

  @Column('character varying', {
    name: 'wechat_no',
    nullable: true,
    length: 255,
  })
  wechatNo: string | null;

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

  @Column('timestamp without time zone', { name: 'login_time', nullable: true })
  loginTime: Date | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;

  @Column('character varying', {
    name: 'salt',
    nullable: true,
  })
  salt: string;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.pwd;
  }
}
