const express = require("express")
const db = require("../../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const recipes = await db.getRecipes()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const list = await db.getShoppingList(req.params.id)
        res.json(list)
    } catch(err) {
        next(err)
    }
})

router.get("/instructions/:id", async (req, res, next) => {
    try {
        const instructions = await db.getInstructions(req.params.id)
        res.json(instructions)
    } catch(err) {
        next(err)
    }
})

module.exports = router