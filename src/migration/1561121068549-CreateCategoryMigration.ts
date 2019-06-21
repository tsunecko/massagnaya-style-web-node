import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class CreateCategoryMigration1561121068549
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
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
            name: 'note',
            type: 'varchar',
            length: '255',
            collation: 'utf8mb4_unicode_ci',
            isNullable: false
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
    await queryRunner.dropTable('categories');
  }
}
