import { Column, Entity, Index } from 'typeorm';

@Index('pk_vip_related_content', ['id'], { unique: true })
@Entity('workflow_info', { schema: 'public' })
export class WorkflowInfo {
  @Column('character varying', { primary: true, name: 'id', length: 36 })
  id: string;

  @Column('character varying', {
    name: 'workflow_id',
    nullable: true,
    length: 36,
  })
  workflowId: string | null;

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
