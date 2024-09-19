const mongoose = require('mongoose')
const {type} = require('os')

const PlantDatabaseSchema = new mongoose.Schema({
    PlantName: {
        type: String,
        required: [true, "Plant name is mandatory"]
    },
    ScientificName: { 
        type: String,
        required: [true, "Scientific name is mandatory"]
    },
    Family: {
        type: String,
        required: [true, "Family name is mandatory"]
    },
    Habitat: {
        type: String,
        required: [true, "Habitat information is mandatory"]
    },
    CultivationMethod: {
        type: String,
        required: [true, "Cultivation method is mandatory"]
    },
    TemperatureRange: {
        type: String,
        required: [true, "Temperature range is mandatory"]
    },
    PlantPart: {
        type: String,
        required: [true, "Plant part is mandatory"]
    },
    Description: {
        type: String,
        required: [true, "Description of the plant part is mandatory"]
    },
    Disease: {
        type: String,
        required: [true, "Add atleast one disease"]
    },
    DiseaseDescription: {
        type: String,
        required: [true, "Disease description is mandatory"]
    },
    CureMethod: {
        type: String,
        required: [true, "Please add a Cure Method"]
    },
    Price: {
        type: String,
        required: [true, "Price Range is mandatory"]
    }
});

module.exports = mongoose.model('PlantDatabase', PlantDatabaseSchema);
