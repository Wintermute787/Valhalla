const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        
    }
  
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;