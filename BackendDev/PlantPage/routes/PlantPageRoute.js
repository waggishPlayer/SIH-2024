const express = require('express')
const router = express.Router()
const controller = require('../controllers/SpecificPlant')

//Routes
router.get('/plant/:plantID',  controller.SimilarPlants)

module.exports = router