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

@Entity('contacts', { schema: 'massagnayaempty' })
export class Contact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id'
  })
  id: string;

  @Column('varchar', {
    nullable: false,
    name: 'name'
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    name: 'icon'
  })
  icon: string;

  @Column('int', {
    nullable: false,
    name: 'type'
  })
  type: number;

  @Column('varchar', {
    nullable: false,
    name: 'ref'
  })
  ref: string;

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
