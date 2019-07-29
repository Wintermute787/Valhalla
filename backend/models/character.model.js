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
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    } 
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;