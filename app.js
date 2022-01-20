const express = require('express');

const app = express();

const accountRouter = require('./routes/accountRoutes');
const docRouter = require('./routes/docRoutes');
const examRouter = require('./routes/examRoutes');

app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
app.get('/', function (req, res, next) {
    res.status(200).json({
        status: 'success'
    });
});
app.post('/', function (req, res, next) {
  res.status(200).json({
    status: 'success'
    });
});
console.log('aaaaaaaaaaaa');

app.use(express.json());
app.use('/api/accounts', accountRouter);
app.use('/api/docs', docRouter);
app.use('/api/exams', examRouter);

module.exports = app;
