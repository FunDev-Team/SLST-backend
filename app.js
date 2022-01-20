const express = require('express');
const cors = require('cors');

const app = express();

const accountRouter = require('./routes/accountRoutes');
const docRouter = require('./routes/docRoutes');
const examRouter = require('./routes/examRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/accounts', accountRouter);
app.use('/api/docs', docRouter);
app.use('/api/exams', examRouter);

module.exports = app;
