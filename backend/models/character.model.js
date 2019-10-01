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
        
    },
<<<<<<< HEAD
    items: {
        type: Array
    }
=======
    user: [{
        type: schema.Types.ObjectId,
        ref: 'User'
    }]
>>>>>>> adffa46ad4a18dbbe43b8d727b047eb08b44012f
  
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;