const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  fields: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  DOP: {
    type: String,
    required: true,
  },
  totalExams: {
    type: String,
    required: true,
  },
  questions: [
    {
      id: {
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      choice1: {
        type: String,
        required: true,
      },
      choice2: {
        type: String,
        required: true,
      },
      choice3: {
        type: String,
        required: true,
      },
      choice4: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
});

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
