const express = require('express');
const accountController = require('../controller/accountController');

const router = express.Router();

router.param('id', accountController.checkId);

router
  .route('/')
  .get(accountController.getAllAccounts)
  .post(accountController.checkBody, accountController.createAccount);
router
  .route('/:id')
  .get(accountController.getOneAccount)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
