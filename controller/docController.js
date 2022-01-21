const Doc = require('./../models/docs');

exports.getAllDocs = async (req, res) => {
  try {
    const docs = await Doc.find();

    res.status(200).json({
      status: 'success',
      length: docs.length,
      data: {
        docs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Missing required field',
    });
  }
};

exports.getOneDoc = async (req, res) => {
  try {
    const doc = await Doc.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'ID invalid',
    });
  }
};

exports.createDoc = async (req, res) => {
  try {
    const newDoc = await Doc.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        doc: newDoc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Missing required field',
    });
  }
};

exports.updateDoc = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteDoc = async (req, res) => {
  try {
    await Doc.findByIdAndDelete(req.params.id);

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
