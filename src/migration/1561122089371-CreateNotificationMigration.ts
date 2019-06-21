import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class CreateNotificationMigration1561122089371
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'notifications',
        engine: 'InnoDB',
        columns: [
          {
            name: 'id',
            type: 'char',
            length: '36',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            unsigned: true
          },
          {
            name: 'type',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'notifiable_type',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'notifiable_id',
            type: 'bigint',
            length: '20',
            isNullable: false,
            unsigned: true
          },
          {
            name: 'data',
            type: 'text',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'read_at',
            type: 'timestamp',
            isNullable: true,
            default: null
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: true,
            default: null
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            default: null
          }
        ]
      }),
      true
    );

    await queryRunner.createIndex(
      'notifications',
      new TableIndex({
        name: 'notifications_notifiable_type_notifiable_id_index',
        columnNames: ['notifiable_type', 'notifiable_id']
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex(
      'notifications',
      'notifications_notifiable_type_notifiable_id_index'
    );
    await queryRunner.dropTable('notifications');
  }
}
