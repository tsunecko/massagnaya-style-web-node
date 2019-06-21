import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Category } from '../entity/Category';

export class SeedCatogory1561124910667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let categoryMassage = new Category();
    categoryMassage.id = '1';
    categoryMassage.name = 'Общие виды массажа';

    let categoryCorrection = new Category();
    categoryCorrection.id = '2';
    categoryCorrection.name = 'Коррекция фигуры';

    let categoryAccessory = new Category();
    categoryAccessory.id = '3';
    categoryAccessory.name = 'Аксессуары';

    let categoryAddition = new Category();
    categoryAddition.id = '4';
    categoryAddition.name = 'Дополнение к массажу';

    const now = new Date();

    [
      categoryMassage,
      categoryCorrection,
      categoryAccessory,
      categoryAddition
    ].map(category => {
      category.note = '';
      category.created_at = now;
      category.updated_at = now;
    });

    const categoryRepository = getRepository(Category);
    await categoryRepository.save(categoryMassage);
    await categoryRepository.save(categoryCorrection);
    await categoryRepository.save(categoryAccessory);
    await categoryRepository.save(categoryAddition);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
