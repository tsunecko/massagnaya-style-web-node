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
import * as bcrypt from 'bcrypt';
import { Order } from './Order';

@Entity('users', { schema: 'massagnayaempty' })
@Index('users_email_unique', ['email'], { unique: true })
export class User {
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
    name: 'first_name'
  })
  first_name: string;

  @Column('varchar', {
    nullable: false,
    name: 'last_name'
  })
  last_name: string;

  @Column('varchar', {
    nullable: false,
    name: 'middle_name'
  })
  middle_name: string;

  @Column('varchar', {
    nullable: false,
    unique: true,
    name: 'email'
  })
  email: string;

  @Column('timestamp', {
    nullable: true,
    name: 'email_verified_at'
  })
  email_verified_at: Date | null;

  @Column('varchar', {
    nullable: false,
    name: 'tel'
  })
  tel: string;

  @Column('timestamp', {
    nullable: true,
    name: 'tel_verified_at'
  })
  tel_verified_at: Date | null;

  @Column('varchar', {
    nullable: false,
    name: 'password'
  })
  password: string;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    name: 'banned'
  })
  banned: boolean;

  @Column('varchar', {
    nullable: false,
    name: 'role'
  })
  role: string;

  @Column('varchar', {
    nullable: false,
    name: 'api_token'
  })
  api_token: string;

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

  @OneToMany(type => Order, orders => orders.user)
  orders: Order;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }

  getFullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}
