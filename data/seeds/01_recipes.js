
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    {
      recipe_name: "Garlic Bread",
    },
    {
      recipe_name: "Fast Spaghetti"
    },
    {
      recipe_name: "Sweet Tea"
    },
  ])
};
