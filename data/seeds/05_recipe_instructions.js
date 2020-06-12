
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("recipe_instructions").insert([
    {
      recipe_id: 1,
      instruction_id: 1
    },
    {
      recipe_id: 2,
      instruction_id: 1
    },
    {
      recipe_id: 3,
      instruction_id: 1
    },
  ])
};