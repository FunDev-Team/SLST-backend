const express = require('express');
const docController = require('../controller/docController');

const router = express.Router();

router.param('id', docController.checkId);

router
  .route('/')
  .get(docController.getAllDocs)
  .post(docController.checkBody, docController.createDoc);
router
  .route('/:id')
  .get(docController.getOneDoc)
  .patch(docController.updateDoc)
  .delete(docController.deleteDoc);

module.exports = router;
