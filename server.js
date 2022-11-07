const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const noticesRoutes = require('./routes/notices.routes');
//const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes')

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', noticesRoutes);
//app.use('/api', usersRoutes);
app.use('/auth', authRoutes)

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

// prepare for external db
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if(NODE_ENV === 'production') dbUri = 'url to remote db';
else if(NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/NoticeBoard';
else dbUri = 'mongodb://localhost:27017/NoticeBoard';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// and listeners to db, to confirm if connection is ok
db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});