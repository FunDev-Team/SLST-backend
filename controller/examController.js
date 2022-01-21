const Exam = require('./../models/exams');

exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();

    res.status(200).json({
      status: 'success',
      length: exams.length,
      data: {
        exams,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Missing required field',
    });
  }
};

exports.getOneExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        exam,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
};

exports.createExam = async (req, res) => {
  try {
    const newExam = await Exam.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        exam: newExam,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Missing required field',
    });
  }
};

exports.updateExam = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteExam = async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: 'Delete successful!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
};
