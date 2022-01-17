const fs = require('fs');

const exams = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/exams.json`, 'utf-8')
);

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.questions) {
    return res.status(404).json({
      status: 'fail',
      message: 'Missing account or password',
    });
  }
  next();
};

exports.checkId = (req, res, next, id) => {
  const exam = exams.find((el) => el.id == id);
  if (!exam) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
  next();
};

exports.getAllExams = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: exams.length,
    data: {
      exams,
    },
  });
};

exports.getOneExam = (req, res) => {
  const id = req.params.id * 1;
  const exam = exams.find((el) => el.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      exam,
    },
  });
};

exports.createExam = (req, res) => {
  const newId = exams.length + 1;
  const newExam = Object.assign({ id: newId }, req.body);
  exams.push(newExam);

  fs.writeFile(
    `${__dirname}/../data/exams.json`,
    JSON.stringify(exams),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          exam: newExam,
        },
      });
    }
  );
};

exports.updateExam = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteExam = (req, res) => {
  const id = req.params.id * 1;
  var newExams = exams.filter((el) => el.id != id);
  newExams.map((el, index) => {
    el.id = index + 1;
  });

  fs.writeFile(
    `${__dirname}/../data/exams.json`,
    JSON.stringify(newExams),
    (err) => {
      res.status('200').json({
        status: 'success',
        message: 'Exam has been delete',
      });
    }
  );
};
