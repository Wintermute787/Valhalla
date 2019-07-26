const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=> {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json("Error" + err))
});

router.route('/add').post((req,res)=> {
	const username = req.body.username;
	const characters = [];
	 const characterArray = [{"name": req.body.name, "level": req.body.level, "race": req.body.race, "job": req.body.job}];
	const  newCharArray = characters.push(characterArray);


	const newUser = new User({
		username,
		characterArray
	});
	console.log(newUser);

	newUser.save()
		.then(() => res.json('User Added' + newUser))
		.catch(err => res.status(400).json("error" + err))

});

module.exports = router;

