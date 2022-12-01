const express = require('express');
const cors = require('cors');
const path = require('path');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// start express server
const app = express(); 
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

// connect to db 
const NODE_ENV = process.env.NODE_ENV;
/*let dbUri = '';

if(NODE_ENV === 'production') dbUri = process.env.DB_URL;
else if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/NoticeBoard';
else dbUri = 'mongodb://localhost:27017/NoticeBoard';*/

const MONGO_USER = process.env.USERDB;
const MONGO_PASS = process.env.PASSDB;

const dbUri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster1.sg1w6lh.mongodb.net/RealEstateBoard?retryWrites=true&w=majority`;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

// add middleware
if(process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: [
      'http://localhost:3000',
      'http://localhost:8000',
      'https://real-estate-offers-mb.herokuapp.com',
      ],
      credentials: true,
    })
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
  secret: bcrypt.hashSync('xyz678', 8), 
  store: MongoStore.create({ mongoUrl: dbUri, collection: 'sessions' }), 
  resave: false, 
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV == 'production',
  }, 
}))

// access to storage folder
app.use(express.static(path.join(__dirname, './client/build')));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './uploads/')));

// import routes
const noticesRoutes = require('./routes/notices.routes');
const authRoutes = require('./routes/auth.routes');

// use routes
app.use('/api', noticesRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// error status
app.use((req, res) => {
    res.status(404).send('404 not found...');
})

// middleware to store sessions in mongoDB 
//app.use(session({ secret: 'xyz567', store: MongoStore.create({mongoUrl: dbUri})}));

