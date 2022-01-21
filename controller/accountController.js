const Account = require('./../models/accounts');

exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();

    res.status(200).json({
      status: 'success',
      length: accounts.length,
      data: {
        accounts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Missing required field',
    });
  }
};

exports.getOneAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        account,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        account: newAccount,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Missing required field',
    });
  }
};

exports.updateAccount = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);

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
