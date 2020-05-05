
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    {
      name: "Garlic Bread",
    },
    {
      name: "Fast Spaghetti"
    },
    {
      name: "Sweet Tea"
    },
  ])
};
