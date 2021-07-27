import { Column, Entity, Index } from 'typeorm';

@Index('pk_author_certified', ['certifiedId'], { unique: true })
@Entity('author_certified', { schema: 'public' })
export class AuthorCertified {
  @Column('character varying', {
    primary: true,
    name: 'certified_id',
    length: 36,
  })
  certifiedId: string;

  @Column('character varying', { name: 'user_id', nullable: true, length: 36 })
  userId: string | null;

  @Column('character varying', {
    name: 'user_name',
    nullable: true,
    length: 36,
  })
  userName: string | null;

  @Column('character', {
    name: 'credentials\n_type',
    nullable: true,
    length: 1,
  })
  credentialsType: string | null;

  @Column('character varying', {
    name: 'credentials\n_num',
    nullable: true,
    length: 255,
  })
  credentialsNum: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('timestamp without time zone', {
    name: 'application_time',
    nullable: true,
  })
  applicationTime: Date | null;

  @Column('character varying', {
    name: 'credentials\n_file',
    nullable: true,
    length: 36,
  })
  credentialsFile: string | null;

  @Column('character varying', { name: 'remark', nullable: true, length: 3600 })
  remark: string | null;

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
