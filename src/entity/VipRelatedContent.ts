import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vip_related_content', { schema: 'public' })
export class VipRelatedContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', { name: 'group_id', nullable: true, length: 36 })
  groupId: string | null;

  @Column('character', { name: 'related_type', nullable: true, length: 1 })
  relatedType: string | null;

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
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
