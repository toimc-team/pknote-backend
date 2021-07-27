import { Column, Entity, Index } from 'typeorm';

@Index('base_tenant_pkey', ['tenantId'], { unique: true })
@Entity('base_tenant', { schema: 'public' })
export class BaseTenant {
  @Column('character varying', { primary: true, name: 'tenant_id', length: 36 })
  tenantId: string;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;

  @Column('character varying', {
    name: 'tenant_name',
    nullable: true,
    length: 16,
  })
  tenantName: string | null;

  @Column('character', { name: 'status', nullable: true, length: 1 })
  status: string | null;

  @Column('character varying', {
    name: 'tenant_email',
    nullable: true,
    length: 48,
  })
  tenantEmail: string | null;

  @Column('character varying', {
    name: 'responsible_person',
    nullable: true,
    length: 16,
  })
  responsiblePerson: string | null;

  @Column('character varying', { name: 'phone', nullable: true, length: 11 })
  phone: string | null;

  @Column('character varying', {
    name: 'tenant_file_uuid',
    nullable: true,
    length: 36,
  })
  tenantFileUuid: string | null;

  @Column('character varying', {
    name: 'tenant_admin_user',
    nullable: true,
    length: 255,
  })
  tenantAdminUser: string | null;
}
