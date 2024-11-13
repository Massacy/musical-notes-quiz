/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("notes", (table) => {
      table.increments("id");
      table.string("abcjs_name").notNullable();
      table.string("iso_name").notNullable();
      table.integer("midi_name").notNullable();
      table.integer("ledger_line_nb").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("notes");
};
