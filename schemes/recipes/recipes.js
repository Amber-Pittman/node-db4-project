const express = require("express")
const db = require("../../data/config")
const recipes = require("./recipes-model")

const router = express.Router()


// STRETCH Attempts

router.get("/", async (req, res, next) => {
    recipes.getRecipes()
    try {
        res.json(await db("recipes"))
    } catch(err) {
        next(err)
    }
})

router.get("/:id/shoppingList", (req, res, next) => {
    recipes.getShoppingList(req.params.id)
    .then (shoppingList => {
        res.json(shoppingList)
    })
    .catch(err => {
        next(err)
    })
})

router.get("/:id/instructions", async (req, res, next) => {
    try {
        const instructions = await db.getInstructions(req.params.id)
        res.json(instructions)
    } catch(err) {
        next(err)
    }
})

module.exports = router