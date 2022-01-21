const express = require('express');
const accountController = require('../controller/accountController');

const router = express.Router();

router
  .route('/')
  .get(accountController.getAllAccounts)
  .post(accountController.createAccount);
router
  .route('/:id')
  .get(accountController.getOneAccount)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);

module.exports = router;
