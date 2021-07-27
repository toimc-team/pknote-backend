import { Column, Entity, Index } from 'typeorm';

@Index('pk_base_file', ['fileId'], { unique: true })
@Entity('base_file', { schema: 'public' })
export class BaseFile {
  @Column('character varying', { primary: true, name: 'file_id', length: 36 })
  fileId: string;

  @Column('character varying', {
    name: 'file_name',
    nullable: true,
    length: 255,
  })
  fileName: string | null;

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

  @Column('character varying', {
    name: 'file_type',
    nullable: true,
    length: 255,
  })
  fileType: string | null;

  @Column('character varying', {
    name: 'file_uuid',
    nullable: true,
    length: 255,
  })
  fileUuid: string | null;

  @Column('bigint', {
    name: 'file_size',
    nullable: true,
  })
  fileSize: number | null;

  @Column('character varying', {
    name: 'table_name',
    nullable: true,
    length: 255,
  })
  tableName: string | null;

  @Column('character varying', {
    name: 'column_name',
    nullable: true,
    length: 255,
  })
  columnName: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'content_id',
    nullable: true,
    length: 36,
  })
  contentId: string | null;

  @Column('character varying', {
    name: 'column_id',
    nullable: true,
    length: 36,
  })
  columnId: string | null;

  @Column('character varying', {
    name: 'tenant_id',
    nullable: true,
    length: 36,
  })
  tenantId: string | null;

  @Column('character varying', {
    name: 'certified_id',
    nullable: true,
    length: 36,
  })
  certifiedId: string | null;
}
