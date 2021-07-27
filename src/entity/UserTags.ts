import { Column, Entity, Index } from 'typeorm';

@Index('pk_user_tags', ['tagsId'], { unique: true })
@Entity('user_tags', { schema: 'public' })
export class UserTags {
  @Column('character varying', { primary: true, name: 'tags_id', length: 36 })
  tagsId: string;

  @Column('character varying', {
    name: 'tags_name',
    nullable: true,
    length: 256,
  })
  tagsName: string | null;

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
    name: 'updater_time',
    nullable: true,
  })
  updaterTime: Date | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
