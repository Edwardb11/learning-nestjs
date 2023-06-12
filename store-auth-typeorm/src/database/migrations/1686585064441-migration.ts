import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1686585064441 implements MigrationInterface {
  name = 'Migration1686585064441';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX "IDX_0decfc62b4e4834e2024a9d9c4" ON "product" ("price", "stock") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0decfc62b4e4834e2024a9d9c4"`,
    );
  }
}
