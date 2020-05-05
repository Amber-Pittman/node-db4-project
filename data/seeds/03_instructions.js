exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex("instructions").insert([
      {
        step: "Heat the oven to 350",
        step_number: 1
      },
      {
        step: "Halve the loaf of bread lengthwise",
        step_number: 2
      },
      {
        step: "Combine butter with fresh garlic",
        step_number: 3
      },
      {
        step: "Slather garlic butter onto both bread halves",
        step_number: 4
      },
      {
        step: "Place in oven for 10 minutes",
        step_number: 5
      },
      {
        step: "Remove from oven and sprinkle bread with Parmesan cheese",
        step_number: 6
      },
      {
        step: "Return bread to oven until cheese is melted",
        step_number: 7
      },
      {
        step: "Remove bread and allow to cool before serving",
        step_number: 8
      },
    ])
  };