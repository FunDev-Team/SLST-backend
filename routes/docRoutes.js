const express = require('express');
const docController = require('../controller/docController');

const router = express.Router();

router
  .route('/')
  .get(docController.getAllDocs)
  .post(docController.createDoc);
router
  .route('/:id')
  .get(docController.getOneDoc)
  .patch(docController.updateDoc)
  .delete(docController.deleteDoc);

module.exports = router;
