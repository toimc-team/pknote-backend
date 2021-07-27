import { Column, Entity, Index } from 'typeorm';

@Index('pk_role', ['roleId'], { unique: true })
@Entity('base_role', { schema: 'public' })
export class BaseRole {
  @Column('character varying', { primary: true, name: 'role_id', length: 36 })
  roleId: string;

  @Column('character varying', {
    name: 'competence_id',
    nullable: true,
    length: 36,
  })
  competenceId: string | null;

  @Column('character varying', {
    name: 'role_codes',
    nullable: true,
    length: 16,
  })
  roleCodes: string | null;

  @Column('character varying', {
    name: 'role_name',
    nullable: true,
    length: 16,
  })
  roleName: string | null;

  @Column('character varying', { name: 'org_id', nullable: true, length: 36 })
  orgId: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'competence_ids',
    nullable: true,
    length: 3600,
  })
  competenceIds: string | null;

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
