import { Column, Entity, Index } from 'typeorm';

@Index('pk_vip_group', ['groupId'], { unique: true })
@Entity('vip_group', { schema: 'public' })
export class VipGroup {
  @Column('character varying', { primary: true, name: 'group_id', length: 36 })
  groupId: string;

  @Column('character varying', {
    name: 'group_name',
    nullable: true,
    length: 255,
  })
  groupName: string | null;

  @Column('character varying', {
    name: 'category_id',
    nullable: true,
    length: 36,
  })
  categoryId: string | null;

  @Column('character', { name: 'is_view', nullable: true, length: 1 })
  isView: string | null;

  @Column('integer', { name: 'discount', nullable: true })
  discount: number | null;

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
