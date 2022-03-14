const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const checkEmailValidation = require('../utils/checkEmailValidation');
const Job = require('../models/Job');
const User = require('../models/User');
const Info = require('../models/Info');
const {
  getEmailTemplate, getApprovedEmailTemplate, getDeclinedEmailTemplate,
  getEditEmailTemplate, getNotificationEmail,
} = require('../utils/email/Email');

exports.SetRealTimeEmailNotification = async (req, res, next) => {
  const { user } = req;

  try {
    const { message } = req.body;

    user.realTimeEmailNotification = message;

    await user.save();

    res.status(200).json({
      success: true,
      info: 'Success',
    });
  } catch (e) {
    next(e);
  }
};

exports.getJobInfo = async (req, res, next) => {
  try {
    await Job.find({}, (error, jobs) => {
      const jobsList = [];
      jobs.forEach((job) => {
        // Handle Auto Expire funtionality of job after 30days
        if (Date.now() > job.autoExpireDate) {
          return;
        }
        jobsList.push(job);
      });
      res.send(jobsList);
    });
  } catch (e) {
    next(e);
  }
};

// ======================================================
// ======================================================

exports.sendRequestEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    if (!checkEmailValidation(email)) {
      return next(new ErrorResponse(`Email ${email} is not valid`, 401));
    }

    const data = {
      positionName: null,
      companyName: null,
      isCompleted: false,
      jobStartTime: null,
      jobClosingDate: null,
      jobHours: null,
      jobContract: null,
      jobLocation: null,
      applicationContactDetail: null,
      questionContactDetail: null,
      companyDescription: null,
      jobDescription: null,
      jobSalary: null,
      jobSkill: null,
      jobSalaryType: null,
      companyLogoURL: null,
    };

    const job = await Job.create(data);

    const emailToken = job.getRequestEmailToken();

    job.requestedEmail = email;
    await job.save();

    const requestFormUrl = `https://team15-crm.vercel.app/form/${emailToken}`;

    const emailTemplate = getEmailTemplate(requestFormUrl);

    try {
      await sendEmail({
        to: email,
        subject: 'Job Vacancy Information Form',
        text: emailTemplate,
      });

      res.status(200).json({
        success: true,
        info: 'Email sent',
      });
    } catch (error) {
      return next(new ErrorResponse('Email could not be sent', 404));
    }
  } catch (error) {
    next(error);
  }
};

exports.sendBackEmployerFormInfo = async (req, res, next) => {
  // console.log('Before: ', req.params.emailToken);
  const RequestedEmailToken = crypto
    .createHash('sha256')
    .update(req.params.emailToken)
    .digest('hex');
  // console.log(emailToken);

  try {
    const job = await Job.findOne({
      RequestedEmailToken,
      RequestedEmailTokenExpire: { $gt: Date.now() },
    });
    if (!job) {
      return next(new ErrorResponse('Invaild Email Token', 400));
    }

    if (job.isCompleted) {
      return next(new ErrorResponse('You have submitted perviously', 400));
    }

    const query = {
      RequestedEmailToken,
      RequestedEmailTokenExpire: { $gt: Date.now() },
    };

    const update = {
      $set: {
        positionName: req.body.positionName,
        companyName: req.body.companyName,
        isCompleted: true,
        jobStartTime: req.body.jobStartTime,
        jobClosingDate: req.body.jobClosingDate,
        jobHours: req.body.jobHours,
        jobContract: req.body.jobContract,
        jobLocation: req.body.jobLocation,
        applicationContactDetail: req.body.applicationContactDetail,
        questionContactDetail: req.body.questionContactDetail,
        companyDescription: req.body.companyDescription,
        jobDescription: req.body.jobDescription,
        jobSalary: req.body.jobSalary,
        jobSkill: req.body.jobSkill,
        jobSalaryType: req.body.jobSalaryType,
        companyLogoURL: req.body.companyLogoURL,
        RequestedEmailToken: undefined,
        RequestedEmailTokenExpire: undefined,
      },
    };

    Job.findOneAndUpdate(query, update)
      .then((e) => {
        console.log('Updated success');
      })
      .catch((err) => next(new ErrorResponse('Update Error', 400)));

    const adminEmailList = await User.find({ isAdmin: true, realTimeEmailNotification: true }, { _id: 0, email: 1 });

    await Promise.all(adminEmailList.map(async (admin) => {
      const { email } = admin;
      const subject = 'Job board - You have received a notification';
      const text = getNotificationEmail();
      try {
        await sendEmail({
          to: email,
          subject,
          text,
        });
        console.log('email sent');
      } catch (error) {
        console.log('email failed');
      }
    }));

    res.status(200).json({
      success: true,
      info: 'Success',
    });
  } catch (error) {
    next(error);
  }
};

// ======================================================
// ======================================================

exports.updateJobInfo = async (req, res, next) => {
  const { _id } = req.params;

  try {
    const job = await Job.findById(_id);

    if (!job) {
      return next(new ErrorResponse('Job is not found', 400));
    }

    const update = {
      $set: {
        positionName: req.body.positionName,
        companyName: req.body.companyName,
        isCompleted: true,
        jobStartTime: req.body.jobStartTime,
        jobClosingDate: req.body.jobClosingDate,
        jobHours: req.body.jobHours,
        jobContract: req.body.jobContract,
        jobLocation: req.body.jobLocation,
        applicationContactDetail: req.body.applicationContactDetail,
        questionContactDetail: req.body.questionContactDetail,
        companyDescription: req.body.companyDescription,
        jobDescription: req.body.jobDescription,
        jobSalary: req.body.jobSalary,
        jobSkill: req.body.jobSkill,
        jobSalaryType: req.body.jobSalaryType,
        companyLogoURL: req.body.companyLogoURL,
        RequestedEmailToken: undefined,
        RequestedEmailTokenExpire: undefined,
      },
    };
    const email = job.requestedEmail;
    const subject = 'Edit';
    const text = getEditEmailTemplate(job, req.body);
    Job.findByIdAndUpdate(_id, update)
      .then((e) => {
        console.log('Updated success');
      })
      .catch((err) => next(new ErrorResponse('Update Error', 400)));
    try {
      await sendEmail({
        to: email,
        subject,
        text,
      });
      res.status(200).json({
        success: true,
        info: 'Email sent',
      });
    } catch (error) {
      return next(new ErrorResponse('Email could not be sent', 404));
    }
  } catch (error) {
    next(error);
  }
};

exports.approveJob = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const job = await Job.findById(_id);
    if (!job) {
      return next(new ErrorResponse('Job does not exist', 400));
    }

    if (job.isActive) {
      return next(new ErrorResponse('Job has been approved', 400));
    }
    const email = job.requestedEmail;
    const subject = 'Approve';
    const link = `https://team15-crm.vercel.app/withdrawJob/${job._id}`;
    const text = getApprovedEmailTemplate(job, link);
    job.isActive = true;
    job.autoExpireDate = Date.now() + 30 * 24 * 60 * (60 * 1000);
    await job.save();

    try {
      await sendEmail({
        to: email,
        subject,
        text,
      });

      res.status(200).json({
        success: true,
        info: 'Email sent',
        jobId: job._id,
      });
    } catch (error) {
      return next(new ErrorResponse('Email could not be sent', 404));
    }
  } catch (error) {
    next(error);
  }
};

// ======================================================
// ======================================================

exports.declineJob = async (req, res, next) => {
  const {
    _id, companyName,
    positionName,
    jobLocation,
    jobStartTime,
    jobClosingDate,
    jobHours,
    jobContract,
    jobSalary,
    companyDescription,
    jobDescription,
    jobSkill,
    questionContactDetail,
    applicationContactDetail,
    overall,
  } = req.body;

  try {
    const job = await Job.findById(_id);
    if (!job) {
      return next(new ErrorResponse('Job does not exist', 400));
    }

    await Job.findByIdAndDelete(_id)
      .then((e) => {
        console.log('Job has been deleted successfully');
      })
      .catch((err) => next(new ErrorResponse('Delete Error', 400)));

    const email = job.requestedEmail;
    const subject = 'Decline';
    const text = getDeclinedEmailTemplate(job,
      companyName,
      positionName,
      jobLocation,
      jobStartTime,
      jobClosingDate,
      jobHours,
      jobContract,
      jobSalary,
      companyDescription,
      jobDescription,
      jobSkill,
      questionContactDetail,
      applicationContactDetail,
      overall);

    // job.isActive = true;

    // await job.save();

    try {
      await sendEmail({
        to: email,
        subject,
        text,
      });

      res.status(200).json({
        success: true,
        info: 'Email sent',
      });
    } catch (error) {
      return next(new ErrorResponse('Email could not be sent', 404));
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteAllJob = async (req, res, next) => {
  try {
    await Job.deleteMany();

    res.status(200).json({
      success: true,
      info: 'Success',
    });
  } catch (error) {
    next(error);
  }
};

exports.employerDeleteJob = async (req, res, next) => {
  const { text, jobId } = req.body;

  try {
    const job = await Job.findOne({ _id: jobId });

    if (!job) {
      return next(new ErrorResponse('Job does not exist', 400));
    }

    const data = {
      DeleteReason: text,
      CompanyName: job.companyName,
      PositionName: job.positionName,
      RequestedEmail: job.requestedEmail,
    };

    await Job.findByIdAndDelete(jobId)
      .then((e) => {
        console.log('Job has been deleted successfully');
      })
      .catch((err) => next(new ErrorResponse('Delete Error', 400)));

    await Info.create(data);

    res.status(200).json({
      success: true,
      info: 'Delete Success',
    });
  } catch (error) {
    next(error);
  }
};
