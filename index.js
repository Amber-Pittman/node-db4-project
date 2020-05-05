const express = require("express")
const helmet = require("helmet")
const recipesRouter = require("./schemes/recipes/recipes")
const ingredientsRouter = require("./schemes/ingredients/ingredients")
const instructionsRouter = require("./schemes/instructions/instructions")

const server = express()
const PORT = process.env.PORT || 5000;

server.use(helmet())
server.use(express.json())

server.use("/recipes", recipesRouter)
server.use("/ingredients", ingredientsRouter)
server.use("/instructions", instructionsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message:"Something went wrong."
    })
})

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`)
})

module.exports = server