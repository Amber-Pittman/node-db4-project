
exports.up = async function(knex) {
    await knex.schema.createTable("recipe_instructions", (table) => {
        table.integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("instruction_id")
            .notNull()
            .references("id")
            .inTable("instructions")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["recipe_id", "instruction_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_instructions")
};