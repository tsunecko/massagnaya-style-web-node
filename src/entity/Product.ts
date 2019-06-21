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

@Entity('products', { schema: 'massagnayaempty' })
export class Product {
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
    name: 'price'
  })
  price: string;

  @Column('varchar', {
    nullable: false,
    name: 'time'
  })
  time: string;

  @Column('text', {
    nullable: false,
    name: 'note'
  })
  note: string;

  @Column('varchar', {
    nullable: false,
    name: 'image'
  })
  image: string;

  @Column('int', {
    nullable: false,
    name: 'category_id'
  })
  category_id: number;

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
