const mongoose = require('mongoose');

const alphabetModel = mongoose.Schema({
  alphabets: [
    {
      alphabet: {
        type: String,
        required: [true, 'Please provide an alphabet'],
      },
      value: {
        type: String,
        required: [true, 'Please provide a value'],
      },
    },
  ],
});

module.exports = mongoose.model('Alphabet', alphabetModel);
