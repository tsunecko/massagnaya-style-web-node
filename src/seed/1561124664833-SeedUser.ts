import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/User';

export class SeedCategory1561100449542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let userAdmin = new User();
    userAdmin.name = 'admin';
    userAdmin.first_name = 'admin';
    userAdmin.last_name = 'admin';
    userAdmin.middle_name = 'admin';
    userAdmin.email = 'admin@gmail.com';
    userAdmin.password = 'admin';
    userAdmin.tel = '+380991111111';
    userAdmin.role = 'admin';
    userAdmin.banned = false;
    userAdmin.api_token = '';

    let userMaster = new User();
    userMaster.name = 'master';
    userMaster.first_name = 'master';
    userMaster.last_name = 'master';
    userMaster.middle_name = 'master';
    userMaster.email = 'master@gmail.com';
    userMaster.password = 'master';
    userMaster.tel = '+380992222222';
    userMaster.role = 'master';
    userMaster.banned = false;
    userMaster.api_token = '';

    let user = new User();
    user.name = 'user';
    user.first_name = 'user';
    user.last_name = 'user';
    user.middle_name = 'user';
    user.email = 'user@gmail.com';
    user.password = 'user';
    user.tel = '+380993333333';
    user.role = 'user';
    user.banned = false;
    user.api_token = '';

    const now = new Date();

    [userAdmin, userMaster, user].map(userObj => {
      userObj.email_verified_at = now;
      userObj.tel_verified_at = now;
      userObj.created_at = now;
      userObj.updated_at = now;
      userObj.password = bcrypt.hashSync(
        userObj.password,
        bcrypt.genSaltSync(10)
      );
    });

    const userRepository = getRepository(User);
    await userRepository.save(userAdmin);
    await userRepository.save(userMaster);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
