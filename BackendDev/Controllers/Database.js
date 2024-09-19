const PlantDatabase = require('../Models/PlantDatabase')
const mongoose = require('mongoose')

module.exports.AddPlants = async(req, res) => {
    try {
        const {
            PlantName,
            ScientificName,
            Family,
            Habitat,
            CultivationMethod,
            TemperatureRange,
            PlantPart,
            Description,
            Disease,
            DiseaseDescription,
            CureMethod,
            Price
        } = req.body

        const newPlant = new PlantDatabase({
            PlantName,
            ScientificName,
            Family,
            Habitat,
            CultivationMethod,
            TemperatureRange,
            PlantPart,
            Description,
            Disease,
            DiseaseDescription,
            CureMethod,
            Price
        })

        // Save the plant to the database
        await newPlant.save();

        // Respond with the created plant
        res.status(201).json({
            message: 'Plant added successfully',
            plant: newPlant
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error. Could not add plant.' });
    }
}