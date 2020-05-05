
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
};
