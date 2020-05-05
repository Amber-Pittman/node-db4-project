
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("recipe_name").notNull().unique()
    })
};

exports.up = async function(knex) {
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient_name").notNull().unique()
        table.real("ingredient_qty")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
