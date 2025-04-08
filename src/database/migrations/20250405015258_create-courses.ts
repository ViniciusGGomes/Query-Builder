import type { Knex } from "knex";

// Cria uma tabela
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses", (table) => {
    table.increments("id").primary(),
      table.text("name").notNullable,
      table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

// Deleta o que um migration fez
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("courses");
}
