const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
	name: String,
	level: Number,
	race: String,
	job: String
});

const userSchema = new Schema({
	username: {
		type: String
	},
	characters:[characterSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

