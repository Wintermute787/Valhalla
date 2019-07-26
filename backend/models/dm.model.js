const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dmSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
	players: [{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		}
	}],
	games: [{
		gamename: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		},
		numofplayers: {
			type: Number,
			required: true,
			unique: true,
			trim: true,
			minlength: 1
		},
		location: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		},
		genre: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		}
	}]
},{
	timestamp: true,
});

const DM = mongoose.model('DM', dmSchema);
module.exports = DM;
