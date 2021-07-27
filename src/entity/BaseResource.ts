import { Column, Entity, Index } from 'typeorm';

@Index('pk_resource', ['resourceId'], { unique: true })
@Entity('base_resource', { schema: 'public' })
export class BaseResource {
  @Column('character varying', {
    primary: true,
    name: 'resource_id',
    length: 36,
  })
  resourceId: string;

  @Column('character varying', { name: 'code', nullable: true, length: 255 })
  code: string | null;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', { name: 'uri', nullable: true, length: 255 })
  uri: string | null;

  @Column('character', { name: 'type', nullable: true, length: 1 })
  type: string | null;

  @Column('character', { name: 'request_type', nullable: true, length: 1 })
  requestType: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'descriptions',
    nullable: true,
    length: 512,
  })
  descriptions: string | null;

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
