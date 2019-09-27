const mongoose = require('mongoose'), Schema = mongoose.Schema;

const Issue = mongoose.Schema;

const IssueSchema = new Issue({
  project_name: { type: String, unique: true, required: true, max: 50 },
  issue_title: { type: String, required: true, max: 50 },
  issue_text: { type: String, required: true },
  created_by: { type: String, required: true, max: 20 },
  assigned_to: { type: String, max: 20 },
  status_text: { type: String, max: 10 },
  open: { type: Boolean, default: true  }
}, {
  timestamps: {
    createdAt: 'created_on',
    updatedAt: 'updated_on'
  }
});

module.exports = mongoose.model('Issue', IssueSchema);