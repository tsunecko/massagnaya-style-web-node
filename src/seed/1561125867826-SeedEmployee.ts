import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Employee } from '../entity/Employee';

export class SeedEmployee1561125867826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let employeeSveta = new Employee();
    employeeSveta.name = 'Светлана';
    employeeSveta.note =
      'Я умею говорить с телом на одном языке, и мои клиенты всегда остаются довольны. Каждый из вас может позволить себе маленький отпуск, не покидая черты города.';
    employeeSveta.image = '/assets/employees/emp0.jpg';
    employeeSveta.address_id = 1;
    employeeSveta.schedule_type = 1;

    let employeeDasha = new Employee();
    employeeDasha.name = 'Дарья';
    employeeDasha.note =
      'Индивидуальный подход к каждому участку Вашего тела начиная от кончиков пальцев ног заканчивая головой, гарантировано поможет более эффективно справиться со всеми проблемами.';
    employeeDasha.image = '/assets/employees/emp2.jpg';
    employeeDasha.address_id = 1;
    employeeDasha.schedule_type = 2;

    let employeeTanya = new Employee();
    employeeTanya.name = 'Татьяна';
    employeeTanya.note =
      'Массаж-один из лучших подарков, которым вы можете порадовать своё тело. Он укрепляет здоровье и улучшает самочувствие.';
    employeeTanya.image = '/assets/employees/emp1.jpg';
    employeeTanya.address_id = 2;
    employeeTanya.schedule_type = 1;

    const now = new Date();

    [employeeSveta, employeeDasha, employeeTanya].map(employee => {
      employee.created_at = now;
      employee.updated_at = now;
    });

    const employeeRepository = getRepository(Employee);
    await employeeRepository.save(employeeSveta);
    await employeeRepository.save(employeeDasha);
    await employeeRepository.save(employeeTanya);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
