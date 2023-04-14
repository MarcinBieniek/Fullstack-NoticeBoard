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

// start express server
const app = express(); 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// connect to db 
mongoose
  .connect(process.env.DB_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {console.log('DB connection succesfull')})
.catch((err) => {console.log('DB error is', err)});

// add middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8000"],
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
  credentials: true
}))
if(process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
};
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


