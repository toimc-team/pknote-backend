import { Column, Entity, Index } from 'typeorm';

@Index('pk_base_org', ['orgId'], { unique: true })
@Entity('base_org', { schema: 'public' })
export class BaseOrg {
  @Column('character varying', { primary: true, name: 'org_id', length: 36 })
  orgId: string;

  @Column('character varying', {
    name: 'org_name',
    nullable: true,
    length: 255,
  })
  orgName: string | null;

  @Column('character varying', {
    name: 'parent_id',
    nullable: true,
    length: 36,
  })
  parentId: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character', { name: 'type', nullable: true, length: 1 })
  type: string | null;

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
