const mongoose = require('mongoose');
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

const Issue = require('../models/issue');

exports.issueGet = function(req, res) {
  Issue.find({...req.params, ...req.query}, function(err, data) {
    if (err) return res.json({ error: 'could not find issues'});
    return res.json(data);
  });
}

exports.issuePost = function(req, res) {
  const issue = new Issue({...req.params, ...req.body});
  issue.save(function (err, data) {
    if (err) return res.json({ error: 'could not create issue'});
    return res.json(data);
  });
}

exports.issuePut = function(req, res) {
  const { _id, ...body} = req.body;
  if (!_id) {
    return res.json({ error: '_id error'});
  }
  if (Object.values(body).every(value => value === '')) {
    return res.json({ error: 'no updated field sent'});
  }
  Issue.findByIdAndUpdate(_id, {...req.params, ...body}, {new: true}, function(err, data) {
    if (err) return res.json('could not update ' + _id);
    return res.json({ success: 'successfully updated'});
  });
}

exports.issueDelete = function(req, res) {
  const _id = req.body._id;
  if (!_id) {
    return res.json({error: '_id error'});
  }
  Issue.findByIdAndRemove(req.body._id, function(err, data) {
    if (err) return res.json('could not delete ' + _id);
    return res.json({success: 'deleted ' + _id});
  });
}