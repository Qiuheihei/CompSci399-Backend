const mongoose = require('mongoose');
const cryto = require('crypto');

const JobSchema = new mongoose.Schema({
  isActive: {
    type: Boolean,
    default: false,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  requestedEmail: {
    type: String,
    trim: true,
  },

  requestedEmailTime: {
    type: Date,
    trim: true,
    default: Date.now,
  },

  autoExpireDate: {
    type: Date,
    trim: true,
    default: Date.now() + 30 * 24 * 60 * (60 * 1000),
  },

  companyName: {
    type: String,
    trim: true,
    maxlength: 200,
    default: 'eroad',
  },

  positionName: {
    type: String,
    trim: true,
    maxlength: 200,
    default: 'software engineer',
  },

  jobStartTime: {
    type: String,
    default: '123',
  },

  jobHours: {
    type: String,
    trim: true,
    maxlength: 30,
    default: 'full time',
  },

  jobContract: {
    type: String,
    trim: true,
    maxlength: 30,
    default: 'permanent',
  },

  jobSalary: {
    type: Number,
    trim: true,
    deafult: 25,
  },

  jobSalaryType: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  companyLogoURL: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  jobLocation: {
    type: String,
    trim: true,
    default: 'TBA',
  },

  jobClosingDate: {
    type: String,
    default: 'asd',
  },

  companyDescription: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  jobDescription: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  jobSkill: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  questionContactDetail: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  applicationContactDetail: {
    type: String,
    trim: true,
    deafult: 'TBA',
  },

  RequestedEmailToken: String,
  RequestedEmailTokenExpire: Date,
});

JobSchema.pre('save', async (next) => {
  next();
});

// Can't not use arrow function for this one
JobSchema.methods.getRequestEmailToken = function () {
  const EmailToken = cryto.randomBytes(20).toString('hex');
  console.log('Before', EmailToken);
  this.RequestedEmailToken = cryto
    .createHash('sha256')
    .update(EmailToken)
    .digest('hex');
  // console.log('After', this.RequestedEmailToken);
  this.RequestedEmailTokenExpire = Date.now() + 24 * 60 * (60 * 1000);

  return EmailToken;
};

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
