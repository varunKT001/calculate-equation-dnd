const CatchAsyncError = require('../middleware/CatchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');
const Alphabet = require('../models/alphabet');

exports.getAllAlphabets = CatchAsyncError(async (req, res, next) => {
  const alphabets = await Alphabet.findOne();
  if (!alphabets) {
    return next(new ErrorHandler('No data found', 400));
  }
  return res.status(200).json({
    success: true,
    data: alphabets,
  });
});
