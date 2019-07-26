const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../models/user.model');

//describe test
describe('Nesting Records', function(){

	// beforeEach(function(done) {
	// 	mongoose.connection.collections.users.drop(function(){
	// 		done();
	// 	})
	// })
	//create test
	it('Creates a User with sub-documents', function(done){
		var joe = new User({
			username: 'Joe',
			characters: [{
				name: 'Jimbo',
				level: 80,
				race: 'elf',
				job: 'warrior'
			}]
		});
		joe.save().then(function(){
			User.findOne({username: 'Joe'}).then(function(record){
				assert(record.characters.length === 1);
				done();
			})
		})
	})
	it('adds a character to a user', function(done){
			var joe = new User({
				username: 'Joe',
				characters: [{
				name: 'Jimbo',
				level: 80,
				race: 'elf',
				job: 'warrior'
			}]
		})
		joe.save().then(function(){
			User.findOne({username:'Joe'}).then(function(record){
				record.characters.push({name: 'duke', level: 90, race: 'drow', job: 'wizard'});
				record.save().then(function(){
					User.findOne({username: 'Joe'}).then(function(record){
						assert(record.characters.length === 2);
						done();
					})
				})
			})
		})
	})
})

describe('#indexOf()', function() {
	it('should return -1 when the value is not present', function(){
		assert.equal(-1, [1,2,3].indexOf(4));
	});
});
