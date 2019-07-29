const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routes/users')


require('dotenv').config();


//express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


//mongoose setup to MongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

//passport config
require('./passport')(passport);



//routes
const userRouter = require('./routes/users');

app.use('/users', userRouter);

//starts the server
app.listen(port, () => {
	console.log(`server is running on port: ${port}`)
});
