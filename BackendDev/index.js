const express = require('express')
const db = require('./db')
const RoutesMain = require('../BackendDev/Routes/PlantDatabase')
const RoutesPlant = require('../BackendDev/PlantPage/routes/PlantPageRoute')
const app = express()
const port = 1555

//middlewares
app.use(express.json())
app.use(RoutesMain)

//event listener
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})