const PlantDatabase = require('../../Models/PlantDatabase');

// Route to get similar plants based on the current plant's diseases or family
module.exports.SimilarPlants = async (req, res) => {
    try {
        const plantId = req.params.plantId;

        // Fetch the current plant by its ID
        const currentPlant = await PlantDatabase.findById(plantId);
        if (!currentPlant) {
            return res.status(404).json({ message: "Plant not found" });
        }

        // Extract diseases and family from the current plant
        const diseases = currentPlant.Disease;
        const plantFamily = currentPlant.Family;

        let similarPlants = [];

        // Try to find similar plants by disease
        if (diseases) {
            similarPlants = await PlantDatabase.find({
                _id: { $ne: plantId }, // Exclude the current plant from the results
                Disease: { $regex: new RegExp(diseases.split(',').join("|"), 'i') }
            }).limit(4);
        }

        // If no similar plants are found by disease, find by plant family
        if (similarPlants.length === 0 && plantFamily) {
            similarPlants = await PlantDatabase.find({
                _id: { $ne: plantId }, // Exclude the current plant from the results
                Family: plantFamily
            }).limit(4);
        }

        // If still no plants are found, return a message
        if (similarPlants.length === 0) {
            return res.status(404).json({ message: "No similar plants found." });
        }

        res.json(similarPlants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

