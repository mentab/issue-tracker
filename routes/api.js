/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var mongoose = require('mongoose');
var objectId = mongoose.Types.ObjectId;

var issueController = require('../controllers/issueController');

module.exports = function (app) {
  app.route('/api/issues/:project_name')
    .get(issueController.issueGet)
    .post(issueController.issuePost)
    .put(issueController.issuePut)
    .delete(issueController.issueDelete);
  };