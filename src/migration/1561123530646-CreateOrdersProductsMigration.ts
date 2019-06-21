import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class CreateOrdersProductsMigration1561123530646
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'orders_products',
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
            name: 'order_id',
            type: 'int',
            length: '11',
            isNullable: false,
            unsigned: true
          },
          {
            name: 'product_id',
            type: 'int',
            length: '11',
            isNullable: false,
            unsigned: true
          },
          {
            name: 'snapshot',
            type: 'int',
            length: '11',
            isNullable: true,
            default: null
          }
        ]
      }),
      true
    );

    await queryRunner.createIndex(
      'orders_products',
      new TableIndex({
        name: 'inx_orders_products',
        columnNames: ['order_id', 'product_id']
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('orders_products', 'inx_orders_products');
    await queryRunner.dropTable('orders_products');
  }
}
