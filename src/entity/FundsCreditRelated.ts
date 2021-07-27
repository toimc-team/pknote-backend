import { Column, Entity, Index } from 'typeorm';

@Index('pk_funds_credit_related', ['id'], { unique: true })
@Entity('funds_credit_related', { schema: 'public' })
export class FundsCreditRelated {
  @Column('character varying', { primary: true, name: 'id', length: 36 })
  id: string;

  @Column('character varying', {
    name: 'credit_id',
    nullable: true,
    length: 36,
  })
  creditId: string | null;

  @Column('character varying', {
    name: 'payinfo_id',
    nullable: true,
    length: 36,
  })
  payinfoId: string | null;
}
