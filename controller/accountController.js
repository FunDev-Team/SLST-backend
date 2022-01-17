const { json } = require('express/lib/response');
const fs = require('fs');

const accounts = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/accounts.json`, 'utf-8')
);

exports.checkBody = (req, res, next) => {
  if (!req.body.account || !req.body.password) {
    return res.status(404).json({
      status: 'fail',
      message: 'Missing account or password',
    });
  }
  next();
};

exports.checkId = (req, res, next, id) => {
  const account = accounts.find((el) => el.id == id);
  if (!account) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
  next();
};

exports.getAllAccounts = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: accounts.length,
    data: {
      accounts,
    },
  });
};

exports.getOneAccount = (req, res) => {
  const id = req.params.id;
  const account = accounts.find((el) => el.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      account,
    },
  });
};

exports.createAccount = (req, res) => {
  const newId = accounts.length + 1;
  const newAccount = Object.assign({ id: newId }, req.body);
  accounts.push(newAccount);

  fs.writeFile(
    `${__dirname}/../data/accounts.json`,
    JSON.stringify(accounts),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          account: newAccount,
        },
      });
    }
  );
};

exports.updateAccount = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteAccount = (req, res) => {
  const id = req.params.id * 1;
  var newAccounts = accounts.filter((el) => el.id != id);
  newAccounts.map((el, index) => {
    el.id = index + 1;
  });

  fs.writeFile(
    `${__dirname}/../data/accounts.json`,
    JSON.stringify(newAccounts),
    (err) => {
      res.status('200').json({
        status: 'success',
        message: 'Account has been delete',
      });
    }
  );
};
