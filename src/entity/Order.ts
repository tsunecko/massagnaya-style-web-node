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

@Entity('orders', { schema: 'massagnayaempty' })
export class Order {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id'
  })
  id: string;

  @Column('int', {
    nullable: true,
    name: 'user_id'
  })
  user_id: number | null;

  @Column('varchar', {
    nullable: false,
    name: 'date'
  })
  date: string;

  @Column('varchar', {
    nullable: false,
    name: 'time'
  })
  time: string;

  @Column('json', {
    nullable: false,
    name: 'snapshot'
  })
  snapshot: Object;

  @Column('varchar', {
    nullable: true,
    name: 'comment'
  })
  comment: string | null;

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
