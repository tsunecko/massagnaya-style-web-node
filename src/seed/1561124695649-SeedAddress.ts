import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Address } from '../entity/Address';

export class SeedAddress1561116571243 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let address1 = new Address();
    address1.id = '1';
    address1.name = 'г. Харьков, ул. 23-го Августа, 24';
    address1.icon = 'pin';
    address1.geo = 'г. Харьков, ул. 23-го Августа, 24';

    let address2 = new Address();
    address1.id = '2';
    address2.name = 'г. Харьков, просп. Гагарина, 24';
    address2.icon = 'pin';
    address2.geo = 'г. Харьков, просп. Гагарина, 24';

    const now = new Date();

    [address1, address2].map(address => {
      address.created_at = now;
      address.updated_at = now;
    });

    const addressRepository = getRepository(Address);
    await addressRepository.save(address1);
    await addressRepository.save(address2);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
