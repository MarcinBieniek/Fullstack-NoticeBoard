const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');

// set dotenv
dotenv.config();

// import routes
const noticesRoutes = require('./routes/notices.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

/* MIDDLEWARE */

/// WIP
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
  secret: bcrypt.hashSync('xyz678', 8), 
  store: MongoStore.create({ mongoUrl: process.env.DB_URL, collection: 'sessions' }), 
  resave: false, 
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV == 'production',
  }, 
}))

// access to storage folder
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/uploads/')));

// use routes
app.use('/api', noticesRoutes);
app.use('/auth', authRoutes);

// error status
app.use((req, res) => {
  res.status(404).send('404 not found...');
})

// React website
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

///WIP

/* MONGOOSE */
// connects our backend code with the database
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';
const password = process.env.PASSDB;

if(NODE_ENV === 'production') dbUri = 'mongodb+srv://MarcinEden:' + password + '@cluster1.sg1w6lh.mongodb.net/RealEstateBoard?retryWrites=true&w=majority';
else dbUri = 'mongodb+srv://MarcinEden:' + password + '@cluster1.sg1w6lh.mongodb.net/RealEstateBoard?retryWrites=true&w=majority';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+ port);
});