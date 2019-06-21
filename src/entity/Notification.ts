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

@Entity('notifications', { schema: 'massagnayaempty' })
@Index('notifications_notifiable_type_notifiable_id_index', [
  'notifiable_type',
  'notifiable_id'
])
export class Notification {
  @Column('char', {
    nullable: false,
    primary: true,
    length: 36,
    name: 'id'
  })
  id: string;

  @Column('varchar', {
    nullable: false,
    name: 'type'
  })
  type: string;

  @Column('varchar', {
    nullable: false,
    name: 'notifiable_type'
  })
  notifiable_type: string;

  @Column('bigint', {
    nullable: false,
    name: 'notifiable_id'
  })
  notifiable_id: string;

  @Column('text', {
    nullable: false,
    name: 'data'
  })
  data: string;

  @Column('timestamp', {
    nullable: true,
    name: 'read_at'
  })
  read_at: Date | null;

  @Column('timestamp', {
    nullable: true,
    name: 'created_at'
  })
  created_at: Date | null;

  @Column('timestamp', {
    nullable: true,
    name: 'updated_at'
  })
  updated_at: Date | null;
}
