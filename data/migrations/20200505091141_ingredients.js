
exports.up = async function(knex) {
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("ingredient_name").notNull().unique()
        table.real("ingredient_qty")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("ingredients")
};
