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
import { Address } from './Address';
import { Order } from './Order';

@Entity('employees', { schema: 'massagnayaempty' })
export class Employee {
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
    name: 'address_id'
  })
  address_id: number;

  @Column('int', {
    nullable: false,
    name: 'schedule_type'
  })
  schedule_type: number;

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

  @ManyToOne(type => Address, address => address.employees)
  address: Address;

  @OneToMany(type => Order, orders => orders.employee)
  orders: Order;
}
