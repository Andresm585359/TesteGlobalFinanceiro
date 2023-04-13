const mongoose = require('mongoose');

const DigimonSchema = new mongoose.Schema({
    name: String,
    img: String,
    level: String,
});

module.exports = mongoose.model('Digimon', DigimonSchema);