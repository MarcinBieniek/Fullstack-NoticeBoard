const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

/*const noticesRoutes = require('./routes/notices.routes');
const usersRoutes = require('./routes/users.routes');*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*app.use('/api', employeesRoutes);
app.use('/api', departmentsRoutes);
app.use('/api', productsRoutes);*/

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

// connects our backend code with the database
mongoose.connect('mongodb://localhost:27017/companyDB', { useNewUrlParser: true });
const db = mongoose.connection;

// and listeners to db, to confirm if connection is ok
db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});