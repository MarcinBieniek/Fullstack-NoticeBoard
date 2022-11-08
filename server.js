const express = require('express');
const cors = require('cors');
const path = require('path');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');

// start express server
const app = express(); 
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

// connect to db - ready for remote db, not set
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if(NODE_ENV === 'production') dbUri = 'url to remote db';
else if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/NoticeBoard';
else dbUri = 'mongodb://localhost:27017/NoticeBoard';

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
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
  secret: 'xyz567', 
  store: MongoStore.create({ mongoUrl: dbUri, collection: 'sessions' }), 
  resave: false, 
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV == 'production',
  }, }))

// import routes
const noticesRoutes = require('./routes/notices.routes');
const authRoutes = require('./routes/auth.routes');
//const usersRoutes = require('./routes/users.routes');

// use routes
app.use('/api', noticesRoutes);
app.use('/auth', authRoutes);
//app.use('/api', usersRoutes);

// error status
app.use((req, res) => {
    res.status(404).send('404 not found...');
})



// middleware to store sessions in mongoDB 
//app.use(session({ secret: 'xyz567', store: MongoStore.create({mongoUrl: dbUri})}));

