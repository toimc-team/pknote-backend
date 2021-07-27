import { Column, Entity, Index } from 'typeorm';

@Index('pk_study', ['studyId'], { unique: true })
@Entity('study_info', { schema: 'public' })
export class StudyInfo {
  @Column('character varying', { primary: true, name: 'study_id', length: 36 })
  studyId: string;

  @Column('character varying', {
    name: 'student_user_id',
    nullable: true,
    length: 36,
  })
  studentUserId: string | null;

  @Column('character varying', {
    name: 'student_name',
    nullable: true,
    length: 16,
  })
  studentName: string | null;

  @Column('character varying', {
    name: 'content_id',
    nullable: true,
    length: 36,
  })
  contentId: string | null;

  @Column('character varying', { name: 'user_id', nullable: true, length: 36 })
  userId: string | null;

  @Column('numeric', { name: 'progress', nullable: true })
  progress: string | null;

  @Column('time without time zone', { name: 'study_time', nullable: true })
  studyTime: string | null;

  @Column('timestamp without time zone', {
    name: 'start_study_time',
    nullable: true,
  })
  startStudyTime: Date | null;

  @Column('character varying', {
    name: 'tenant_code',
    nullable: true,
    length: 16,
  })
  tenantCode: string | null;
}
