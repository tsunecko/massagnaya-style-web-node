import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Contact } from '../entity/Contact';

export class SeedContact1561125468778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let contactPhone = new Contact();
    contactPhone.name = '+38 068 816 48 16';
    contactPhone.icon = 'call';
    contactPhone.type = 3;
    contactPhone.ref = '+380688164816';

    let contactTelegram = new Contact();
    contactTelegram.name = '@Svetlana_013';
    contactTelegram.icon = 'paper-plane';
    contactTelegram.type = 4;
    contactTelegram.ref = 'Svetlana_013';

    let contactInstagram = new Contact();
    contactInstagram.name = 'massagnaya_style';
    contactInstagram.icon = 'logo-instagram';
    contactInstagram.type = 1;
    contactInstagram.ref = 'massagnaya_style';

    let contactFacebook = new Contact();
    contactFacebook.name = 'sveta.massage.kh';
    contactFacebook.icon = 'logo-facebook';
    contactFacebook.type = 2;
    contactFacebook.ref = 'sveta.massage.kh';

    const now = new Date();

    [contactPhone, contactTelegram, contactInstagram, contactFacebook].map(
      contact => {
        contact.created_at = now;
        contact.updated_at = now;
      }
    );

    const contactRepository = getRepository(Contact);
    await contactRepository.save(contactPhone);
    await contactRepository.save(contactTelegram);
    await contactRepository.save(contactInstagram);
    await contactRepository.save(contactFacebook);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
