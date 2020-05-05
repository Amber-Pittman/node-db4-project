
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("recipe_ingredients").insert([
    {
      recipe_id: 1,
      ingredient_id: 1
    },
    {
      recipe_id: 2,
      ingredient_id: 2
    },
    {
      recipe_id: 3,
      ingredient_id: 3
    },
  ])
};