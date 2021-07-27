import { Column, Entity, Index } from 'typeorm';

@Index('pk_competence', ['competenceId'], { unique: true })
@Entity('base_competence', { schema: 'public' })
export class BaseCompetence {
  @Column('character varying', {
    primary: true,
    name: 'competence_id',
    length: 36,
  })
  competenceId: string;

  @Column('character varying', {
    name: 'resource_id',
    nullable: true,
    length: 36,
  })
  resourceId: string | null;

  @Column('character varying', {
    name: 'path_code',
    nullable: true,
    length: 48,
  })
  pathCode: string | null;

  @Column('character varying', { name: 'name', nullable: true, length: 16 })
  name: string | null;

  @Column('character varying', {
    name: 'parent_id',
    nullable: true,
    length: 36,
  })
  parentId: string | null;

  @Column('character varying', { name: 'icon', nullable: true, length: 16 })
  icon: string | null;

  @Column('character varying', { name: 'path', nullable: true, length: 48 })
  path: string | null;

  @Column('character', { name: 'is_childshow', nullable: true, length: 1 })
  isChildshow: string | null;

  @Column('character', { name: 'is_crumbsshow', nullable: true, length: 1 })
  isCrumbsshow: string | null;

  @Column('character', { name: 'type', nullable: true, length: 1 })
  type: string | null;

  @Column('character varying', {
    name: 'component',
    nullable: true,
    length: 48,
  })
  component: string | null;

  @Column('character', { name: 'is_cache', nullable: true, length: 1 })
  isCache: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'descriptions',
    nullable: true,
    length: 512,
  })
  descriptions: string | null;

  @Column('character varying', {
    name: 'resource_ids',
    nullable: true,
    length: 512,
  })
  resourceIds: string | null;

  @Column('integer', { name: 'sort', nullable: true })
  sort: number | null;

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
