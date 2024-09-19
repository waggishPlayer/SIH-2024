const express = require('express')
const router = express.Router()
const controller = require('../Controllers/Database')

//Routes
router.post('/AddPlant',  controller.AddPlants)

module.exports = router