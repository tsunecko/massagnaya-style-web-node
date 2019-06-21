import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Product } from '../entity/Product';

export class SeedProduct1561126510205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let product1 = new Product();
    product1.name = 'Массаж шейно-воротниковой зоны';
    product1.category_id = 1;
    product1.price = '150';
    product1.time = '20';

    let product2 = new Product();
    product2.name = 'Массаж спины "здоровая спина" (ш-в зона, спина, поясница)';
    product2.category_id = 1;
    product2.price = '250';
    product2.time = '40';

    let product3 = new Product();
    product3.name = 'Массаж спина + руки';
    product3.category_id = 1;
    product3.price = '300';
    product3.time = '60';

    let product4 = new Product();
    product4.name =
      'Массаж общий всего тела нейроседативный (одна сторона) расслабляющий (с аромамаслами)';
    product4.category_id = 1;
    product4.price = '300';
    product4.time = '60';

    let product5 = new Product();
    product5.name =
      'Массаж общий. Классика + испанская техника. Спина, руки, ноги, стопы';
    product5.category_id = 1;
    product5.price = '300';
    product5.time = '60';

    let product6 = new Product();
    product6.name =
      'Массаж общий. Классика + испанская техника. Спина, руки, ноги сзади, стопы, ноги спереди, живот, грудь';
    product6.category_id = 1;
    product6.price = '400';
    product6.time = '90';

    let product7 = new Product();
    product7.name = 'Массаж рисовыми мешочками';
    product7.category_id = 1;
    product7.price = '500';
    product7.time = '90';

    let product8 = new Product();
    product8.name =
      '"Лифтинг-массаж лица" (классический, лимфодренажный, шиацу, фейсбилдинг, лечебно-восстановительный)';
    product8.category_id = 1;
    product8.price = '300';
    product8.time = '40';

    let product9 = new Product();
    product9.name = 'Глубинный массаж лица + аюрведа (снятие социальных масок)';
    product9.category_id = 1;
    product9.price = '400';
    product9.time = '40';

    let product10 = new Product();
    product10.name = 'Массаж головы "классика"';
    product10.category_id = 1;
    product10.price = '150';
    product10.time = '20';

    let product11 = new Product();
    product11.name = 'Массаж головы "Балийский"';
    product11.category_id = 1;
    product11.price = '150';
    product11.time = '20';

    let product12 = new Product();
    product12.name = 'Массаж головы как дополнительная зона';
    product12.category_id = 1;
    product12.price = '100';
    product12.time = '20';

    let product13 = new Product();
    product13.name = 'Массаж стоп';
    product13.category_id = 1;
    product13.price = '150';
    product13.time = '20';

    let product14 = new Product();
    product14.name = 'Массаж стоп как дополнительная зона';
    product14.category_id = 1;
    product14.price = '100';
    product14.time = '20';

    // КОРРЕКЦИЯ ФИГУРЫ
    let product15 = new Product();
    product15.name = 'Лимфодренажный массаж (всего тела)';
    product15.category_id = 2;
    product15.price = '350';
    product15.time = '60-80';

    let product16 = new Product();
    product16.name =
      'Массаж антицеллюлитный "зона Шортиков" живот, передняя часть бедра, задняя часть бедра, бока. Ручной, вакуумный(баночный), медовый, бамбуковыми палками';
    product16.category_id = 2;
    product16.price = '350';
    product16.time = '60';

    let product17 = new Product();
    product17.name = 'Массаж "подтяжка живота" + бока';
    product17.category_id = 2;
    product17.price = '200';
    product17.time = '30';

    let product18 = new Product();
    product18.name =
      'Массаж "подтянутые ножки" (передняя часть бедра, задняя часть бедра)';
    product18.category_id = 2;
    product18.price = '300';
    product18.time = '40';

    let product19 = new Product();
    product19.name = '+1 дополнительная зона к антицеллюлитному массажу "зш"';
    product19.category_id = 2;
    product19.price = '100';
    product19.time = '15-20';

    let product20 = new Product();
    product20.name = 'Массаж антицеллюлитный аппаратный (вакуумно-роликовый)';
    product20.category_id = 2;
    product20.price = '350';
    product20.time = '45';

    let product21 = new Product();
    product21.name =
      'Массаж антицеллюлитный "зона шортиков" + спина + руки (проблемная зона)';
    product21.category_id = 2;
    product21.price = '500';
    product21.time = '90';

    let product22 = new Product();
    product22.name = 'Фитнес-моделирующий массаж "зона шортиков"';
    product22.category_id = 2;
    product22.price = '350';
    product22.time = '60';

    let product23 = new Product();
    product23.name = 'Бандажное обертывание';
    product23.category_id = 2;
    product23.price = '400';
    product23.time = '70-90';

    let product24 = new Product();
    product24.name =
      '"Шоколадный рай" обертывание всего тела (упругость кожи, подтяжка, питание и увлажнение). Скрабирование, обертывание, массаж';
    product24.category_id = 2;
    product24.price = '500';
    product24.time = '90';

    let product25 = new Product();
    product25.name =
      'Детский массаж от 3мес. до 14лет (30 мин массаж + 30 мин ЛФК)';
    product25.category_id = 2;
    product25.price = '300';
    product25.time = '60';

    // АКСЕССУАРЫ
    let product26 = new Product();
    product26.name = 'Бинты для бандажного обертывания (нужно 2-3), 1шт';
    product26.category_id = 3;
    product26.price = '100';
    product26.time = '';

    // ДОПОЛНЕНИЕ К МАССАЖУ
    let product27 = new Product();
    product27.name = 'Обертывание антицеллюлитное "зона шортиков"';
    product27.category_id = 4;
    product27.price = '150';
    product27.time = '';

    let product28 = new Product();
    product28.name =
      'Обертывание для упругости и подтяжки кожи - экстракт ламинарии "зона шортиков"';
    product28.category_id = 4;
    product28.price = '150';
    product28.time = '';

    let product29 = new Product();
    product29.name =
      'Обертывание антицеллюлитное, ламинарии (как дополнение к массажу)';
    product29.category_id = 4;
    product29.price = '100';
    product29.time = '';

    const now = new Date();

    [
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
      product7,
      product8,
      product9,
      product10,
      product11,
      product12,
      product13,
      product14,
      product15,
      product16,
      product17,
      product18,
      product19,
      product20,
      product21,
      product22,
      product23,
      product24,
      product25,
      product26,
      product27,
      product28,
      product29
    ].map(product => {
      product.note = '';
      product.image = '';
      product.created_at = now;
      product.updated_at = now;
    });

    const productRepository = getRepository(Product);
    await productRepository.save(product1);
    await productRepository.save(product2);
    await productRepository.save(product3);
    await productRepository.save(product4);
    await productRepository.save(product5);
    await productRepository.save(product6);
    await productRepository.save(product7);
    await productRepository.save(product8);
    await productRepository.save(product9);
    await productRepository.save(product10);
    await productRepository.save(product11);
    await productRepository.save(product12);
    await productRepository.save(product13);
    await productRepository.save(product14);
    await productRepository.save(product15);
    await productRepository.save(product16);
    await productRepository.save(product17);
    await productRepository.save(product18);
    await productRepository.save(product19);
    await productRepository.save(product20);
    await productRepository.save(product21);
    await productRepository.save(product22);
    await productRepository.save(product23);
    await productRepository.save(product24);
    await productRepository.save(product25);
    await productRepository.save(product26);
    await productRepository.save(product27);
    await productRepository.save(product28);
    await productRepository.save(product29);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
