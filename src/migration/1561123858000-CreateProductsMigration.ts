import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class CreateProductsMigration1561123858000
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        engine: 'InnoDB',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            length: '20',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            unsigned: true
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'price',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'time',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'note',
            type: 'text',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'image',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
          },
          {
            name: 'category_id',
            type: 'int',
            length: '11',
            isNullable: false,
            unsigned: true
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
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('products');
  }
}
