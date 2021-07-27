import { Column, Entity, Index } from 'typeorm';

@Index('pk_msg_reply', ['replyId'], { unique: true })
@Entity('msg_reply', { schema: 'public' })
export class MsgReply {
  @Column('character varying', { primary: true, name: 'reply_id', length: 36 })
  replyId: string;

  @Column('character varying', { name: 'msg_id', nullable: true, length: 512 })
  msgId: string | null;

  @Column('text', { name: 'reply_content', nullable: true })
  replyContent: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

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
    name: 'reply_user_id',
    nullable: true,
    length: 36,
  })
  replyUserId: string | null;

  @Column('character varying', {
    name: 'reply_user_name',
    nullable: true,
    length: 255,
  })
  replyUserName: string | null;

  @Column('timestamp without time zone', { name: 'reply_time', nullable: true })
  replyTime: Date | null;
}
