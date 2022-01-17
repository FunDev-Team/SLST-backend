const fs = require('fs');

const docs = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/docs.json`, 'utf-8')
);

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.url) {
    return res.status(404).json({
      status: 'fail',
      message: 'Missing name or url',
    });
  }
  next();
};

exports.checkId = (req, res, next, id) => {
  const doc = docs.find((el) => el.id == id);
  if (!doc) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
  next();
};

exports.getAllDocs = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: docs.length,
    data: {
      docs,
    },
  });
};

exports.getOneDoc = (req, res) => {
  const id = req.params.id * 1;
  const doc = docs.find((el) => el.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      doc,
    },
  });
};

exports.createDoc = (req, res) => {
  const newId = docs.length + 1;
  const newDoc = Object.assign({ id: newId }, req.body);
  docs.push(newDoc);

  fs.writeFile(
    `${__dirname}/../data/docs.json`,
    JSON.stringify(docs),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          doc: newDoc,
        },
      });
    }
  );
};

exports.updateDoc = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteDoc = (req, res) => {
  const id = req.params.id * 1;
  var newDocs = docs.filter((el) => el.id != id);
  newDocs.map((el, index) => {
    el.id = index + 1;
  });

  fs.writeFile(
    `${__dirname}/../data/docs.json`,
    JSON.stringify(newDocs),
    (err) => {
      res.status('200').json({
        status: 'success',
        message: 'Doc has been delete',
      });
    }
  );
};
