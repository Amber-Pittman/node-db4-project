const db = require("../../data/config")

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("recipes as r")
    .leftJoin("ingredient_qty as q", "r.id", "q.recipe_id")
    .leftJoin("ingredients as i", "q.ingredient_id", "i.id")
    .select(
        "r.recipe_name as recipe_name", 
        "i.name as ingredients",
        "q.quantity as quantity"
    )
    .where("r.id", recipe_id)
}

function getInstructions(recipe_id) {
    return db("recipes as r")
        .select(
            "r.recipe_name as recipe_name",
            "instructions.step",
            "instructions"
        )
        .leftJoin("instructions", "r.id", "instructions.recipe_id")
        .where("r.id", recipe_id)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}