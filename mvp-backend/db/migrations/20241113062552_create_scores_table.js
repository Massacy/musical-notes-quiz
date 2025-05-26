/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("scores", (table) => {
        table.increments("id").primary();
        table.integer("user_id").notNullable();
        table.integer("note_id").notNullable();
        table.integer("time").notNullable();
        table.boolean("is_correct").notNullable();
        table.integer("practice_mode").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        // table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.foreign('note_id').references('notes.id').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("scores");
};
