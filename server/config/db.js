const mongoose = require('mongoose');
const alphabet = require('../models/alphabet');

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Database connected with ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

module.exports = connectToDb;
