import { Column, Entity, Index } from 'typeorm';

@Index('pk_msg_info', ['msgId'], { unique: true })
@Entity('msg_info', { schema: 'public' })
export class MsgInfo {
  @Column('character varying', { primary: true, name: 'msg_id', length: 36 })
  msgId: string;

  @Column('character varying', {
    name: 'msg_title',
    nullable: true,
    length: 512,
  })
  msgTitle: string | null;

  @Column('character', { name: 'msg_type', nullable: true, length: 1 })
  msgType: string | null;

  @Column('text', { name: 'msg_content', nullable: true })
  msgContent: string | null;

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
    name: 'sender_id',
    nullable: true,
    length: 36,
  })
  senderId: string | null;

  @Column('character varying', {
    name: 'sender_name',
    nullable: true,
    length: 255,
  })
  senderName: string | null;

  @Column('character varying', {
    name: 'receiver_id',
    nullable: true,
    length: 36,
  })
  receiverId: string | null;

  @Column('character varying', {
    name: 'receiver_name',
    nullable: true,
    length: 255,
  })
  receiverName: string | null;

  @Column('timestamp without time zone', { name: 'send_time', nullable: true })
  sendTime: Date | null;
}
