const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');

// set dotenv
dotenv.config();

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
}

let dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.sg1w6lh.mongodb.net/RealEstateBoard?retryWrites=true&w=majority`;

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({
      mongoUrl: dbUri,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      collectionName: 'sessions',
      cookie: {
        secure: process.env.NODE_ENV == 'production',
      },
    }),
    resave: false,
    saveUninitialized: false,
  })
)

// access to storage folder
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/uploads')));

// import routes
const noticesRoutes = require('./routes/notices.routes');
const authRoutes = require('./routes/auth.routes');

// use routes
app.use('/api', noticesRoutes);
app.use('/auth', authRoutes);

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// error status
app.use((req, res) => {
    res.status(404).send('404 not found...');
})

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('connected to the database');
});

db.on('error', (err) => {
  console.log('Error:' + err);
});
