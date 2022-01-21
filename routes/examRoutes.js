const express = require('express');
const examController = require('../controller/examController');

const router = express.Router();

router
  .route('/')
  .get(examController.getAllExams)
  .post(examController.createExam);
router
  .route('/:id')
  .get(examController.getOneExam)
  .patch(examController.updateExam)
  .delete(examController.deleteExam);

module.exports = router;
