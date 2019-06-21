import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from 'typeorm';

@Entity('password_resets', { schema: 'massagnayaempty' })
@Index('password_resets_email_index', ['email'])
export class PasswordReset {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id'
  })
  id: string;

  @Column('varchar', {
    nullable: false,
    name: 'email'
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    name: 'token'
  })
  token: string;

  @Column('timestamp', {
    nullable: true,
    name: 'created_at'
  })
  created_at: Date | null;
}
