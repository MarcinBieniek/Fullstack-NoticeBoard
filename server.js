const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});