
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("ingredients").insert([
    {
      ingredient_name: "French Loaf",
      ingredient_qty: 1
    },
    {
      ingredient_name: "Unsalted Butter",
      ingredient_qty: 4
    },
    {
      ingredient_name: "Garlic",
      ingredient_qty: 2
    },
    {
      ingredient_name: "Shredded Parmesan Cheese",
      ingredient_qty: 2
    },
  ])
};

// exports.up = async function(knex) {
//   await knex.schema.createTable("ingredients", (table) => {
//       table.increments("id")
//       table.text("ingredient_name").notNull().unique()
//       table.real("ingredient_qty")
//   })
// }
