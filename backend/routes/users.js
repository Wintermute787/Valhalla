const keys = require('../keys');
const express = require("express");
const router = require('express').Router();
let User = require('../models/user.model');
let Character = require('../models/character.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");


//get all users
router.route('/').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json("Error" + err))
	});
	
	//get single user
	router.route('/:id').get((req, res) => {
		User.findById(req.params.id)
			.then(user => res.json(user))
			.catch(err => res.status(400).json("error" + err))
	})

//get all characters
router.route('/character').get((req, res) => {
	Character.find()
		.then(characters => res.json(characters))
		.catch(err => res.status(400).json("error" + err))
})


router.route('/character').post((req, res)=> {
	const newCharacter = new Character({
		name: req.body.name,
		job: req.body.job,
		race: req.body.race,
		level: req.body.level
	})
	newCharacter
	.save()
	.then(character => res.json(character))
	.catch(err => res.status(400).json("error" + err));
})



router.route("/register").post((req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({
		email: req.body.email
	}).then(user => {
		if (user) {
			return res.status(400).json({
				email: "email already exists"
			});
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				
			});

			//hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.log(err));
				})
			})
		}
	})
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const email = req.body.email;
	const password = req.body.password;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user exists
		if (!user) {
			return res.status(404).json({ emailnotfound: "Email not found" });
		}
		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name
				};
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

// router.route('/add').post((req,res)=> {
// 	const username = req.body.username;
// 	const characters = [];
// 	 const characterArray = [{"name": req.body.name, "level": req.body.level, "race": req.body.race, "job": req.body.job}];
// 	const  newCharArray = characters.push(characterArray);


// 	const newUser = new User({
// 		username,
// 		characterArray
// 	});
// 	console.log(newUser);

// 	newUser.save()
// 		.then(() => res.json('User Added' + newUser))
// 		.catch(err => res.status(400).json("error" + err))

// });

module.exports = router;

