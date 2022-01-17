const fs = require('fs');
const express = require('express');

const app = new express();
const router = express.Router();
const port = 3000;

// ------------------------------------------ data ----------------------------------------

const docs = JSON.parse(
  fs.readFileSync(`${__dirname}/data/docs.json`, 'utf-8')
);
const exams = JSON.parse(
  fs.readFileSync(`${__dirname}/data/exams.json`, 'utf-8')
);
const accounts = JSON.parse(
  fs.readFileSync(`${__dirname}/data/accounts.json`, 'utf-8')
);

// ----------------------------------------- check id ---------------------------------------

const checkId = (req, res, next, id) => {
  const url = req.url;
  var data = [];
  if (url.indexOf('exam')) {
    data = exams.find((el) => el.id == id);
  } else if (url.indexOf('account')) {
    data = accounts.find((el) => el.id == id);
  } else if (url.indexOf('doc')) {
    data = docs.find((el) => el.id == id);
  }

  if (!data) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }

  next();
};

//----------------------------------------- accounts ---------------------------------------

const getAllAccounts = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: accounts.length,
    data: {
      accounts,
    },
  });
};

const getOneAccount = (req, res) => {
  const id = req.params.id;
  const account = accounts.find((el) => el.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      account,
    },
  });
};
const createAccount = (req, res) => {};
const updateAccount = (req, res) => {
  const id = req.params.id * 1;
};
const deleteAccount = (req, res) => {
  const id = req.params.id * 1;
};

//----------------------------------------- exam -----------------------------------------

const getAllExams = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: exams.length,
    data: {
      exams,
    },
  });
};
const getOneExam = (req, res) => {
  const id = req.params.id * 1;
  const exam = exams.find((el) => el.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      exam,
    },
  });
};
const createExam = (req, res) => {};
const updateExam = (req, res) => {
  const id = req.params.id * 1;
};
const deleteExam = (req, res) => {
  const id = req.params.id * 1;
};

//----------------------------------------- docs -----------------------------------------

const getAllDocs = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: docs.length,
    data: {
      docs,
    },
  });
};
const getOneDoc = (req, res) => {
  const id = req.params.id * 1;
  const doc = docs.find((el) => el.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      doc,
    },
  });
};
const createDoc = (req, res) => {};
const updateDoc = (req, res) => {
  const id = req.params.id * 1;
};
const deleteDoc = (req, res) => {
  const id = req.params.id * 1;
};

// ----------------------------------------- router -----------------------------------------

router.param('id', checkId);

router.route('/docs').get(getAllDocs).post(createDoc);
router.route('/docs/:id').get(getOneDoc).patch(updateDoc).delete(deleteDoc);

router.route('/exams').get(getAllExams).post(createExam);
router.route('/exams/:id').get(getOneExam).patch(updateExam).delete(deleteExam);

router.route('/accounts').get(getAllAccounts).post(createAccount);
router
  .route('/accounts/:id')
  .get(getOneAccount)
  .patch(updateAccount)
  .delete(deleteAccount);

// ----------------------------------------- server ----------------------------------------
app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
