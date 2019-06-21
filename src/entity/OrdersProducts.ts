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

@Entity('orders_products', { schema: 'massagnayaempty' })
@Index('inx_orders_products', ['order_id', 'product_id'])
export class OrdersProducts {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id'
  })
  id: string;

  @Column('int', {
    nullable: false,
    name: 'order_id'
  })
  order_id: number;

  @Column('int', {
    nullable: false,
    name: 'product_id'
  })
  product_id: number;

  @Column('int', {
    nullable: true,
    name: 'snapshot'
  })
  snapshot: number | null;
}
