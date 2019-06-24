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

  public static readonly TYPE_INSTAGRAM = 1;
  public static readonly TYPE_FACEBOOK = 2;
  public static readonly TYPE_PHONE = 3;
  public static readonly TYPE_TELEGRAM = 4;

  public static readonly HREF_LIST = {
    [Contact.TYPE_INSTAGRAM]: 'instagram://user?username=',
    [Contact.TYPE_FACEBOOK]: 'fb://profile/',
    [Contact.TYPE_PHONE]: 'tel:',
    [Contact.TYPE_TELEGRAM]: 'tg://resolve?domain='
  };

  getHref() {
    return (Contact.HREF_LIST[this.type]
      ? Contact.HREF_LIST[this.type]
      : 'http://'
    ).this.ref;
  }
}
