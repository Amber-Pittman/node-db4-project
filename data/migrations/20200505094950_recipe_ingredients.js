
exports.up = async function(knex) {
    await knex.schema.createTable("recipe_ingredients", (table) => {
        table.integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("ingredient_id")
            .notNull()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["recipe_id", "ingredient_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
};
