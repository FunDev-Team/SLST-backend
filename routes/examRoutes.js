const express = require('express');
const examController = require('../controller/examController');

const router = express.Router();

router.param('id', examController.checkId);

router
  .route('/')
  .get(examController.getAllExams)
  .post(examController.checkBody, examController.createExam);
router
  .route('/:id')
  .get(examController.getOneExam)
  .patch(examController.updateExam)
  .delete(examController.deleteExam);

module.exports = router;
