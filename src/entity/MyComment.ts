import { Column, Entity, Index } from 'typeorm';

@Index('pk_comment', ['commentId'], { unique: true })
@Entity('my_comment', { schema: 'public' })
export class MyComment {
  @Column('character varying', {
    primary: true,
    name: 'comment_id',
    length: 36,
  })
  commentId: string;

  @Column('character varying', {
    name: 'content_id',
    nullable: true,
    length: 36,
  })
  contentId: string | null;

  @Column('character varying', {
    name: 'comment_content',
    nullable: true,
    length: 512,
  })
  commentContent: string | null;

  @Column('character varying', {
    name: 'comment_user_id',
    nullable: true,
    length: 36,
  })
  commentUserId: string | null;

  @Column('character varying', {
    name: 'comment_user_name',
    nullable: true,
    length: 16,
  })
  commentUserName: string | null;

  @Column('timestamp without time zone', {
    name: 'comment_time',
    nullable: true,
  })
  commentTime: Date | null;

  @Column('character', { name: 'is_featured', nullable: true, length: 1 })
  isFeatured: string | null;

  @Column('numeric', { name: 'like_number', nullable: true })
  likeNumber: string | null;

  @Column('character', { name: 'is_reply', nullable: true, length: 1 })
  isReply: string | null;

  @Column('character varying', {
    name: 'reply_content',
    nullable: true,
    length: 512,
  })
  replyContent: string | null;

  @Column('character varying', {
    name: 'responder_user_id',
    nullable: true,
    length: 36,
  })
  responderUserId: string | null;

  @Column('character varying', {
    name: 'responder_name',
    nullable: true,
    length: 16,
  })
  responderName: string | null;

  @Column('timestamp without time zone', { name: 'reply_time', nullable: true })
  replyTime: Date | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
