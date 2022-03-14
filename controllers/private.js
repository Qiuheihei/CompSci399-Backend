const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const Job = require('../models/Job');

exports.getPrivateData = async (req, res, next) => {
  const { username } = req.user;

  res.status(200).json({
    success: true,
    data: req.user,
  });
};

exports.userSaveJob = async (req, res, next) => {
  try {
    const { jobId } = req.body;
    const { user } = req;

    const job = await Job.findOne({ _id: jobId });

    if (!job) {
      return next(new ErrorResponse('Job is not found', 400));
    }

    if (user.savedJobList.includes(jobId)) {
      return next(new ErrorResponse('You have saved this job', 401));
    }

    user.savedJobList.push(jobId);

    await user.save();

    res.status(200).json({
      success: true,
      info: 'Job saved',
    });
  } catch (error) {
    next(error);
  }
};

exports.userDeleteJob = async (req, res, next) => {
  try {
    const { jobId } = req.body;
    const { user } = req;

    const job = await Job.findOne({ _id: jobId });

    if (!job) {
      return next(new ErrorResponse('Job is not found', 400));
    }

    if (!user.savedJobList.includes(jobId)) {
      return next(new ErrorResponse('Unfounded job', 401));
    }

    user.savedJobList = user.savedJobList.filter((jobInfo) => jobInfo !== jobId);

    await user.save();

    res.status(200).json({
      success: true,
      info: 'Job deleted',
    });
  } catch (error) {
    next(error);
  }
};
