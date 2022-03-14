const express = require('express');
const {
  sendRequestEmail, getJobInfo, sendBackEmployerFormInfo, deleteAllJob, approveJob, declineJob,
  employerDeleteJob, updateJobInfo, SetRealTimeEmailNotification,
} = require('../controllers/admin');

const { getEmployerDelelteInfo } = require('../controllers/info');
const { protect } = require('../middleware/auth');

const router = express.Router();

// POST
router.route('/send-request-email').post(sendRequestEmail);
router.route('/approve-job').post(approveJob);
router.route('/employer-delete-job').post(employerDeleteJob);
router.route('/set-email-notification').post(protect, SetRealTimeEmailNotification);

// PUT
router.route('/send-back-requested-email/:emailToken').put(sendBackEmployerFormInfo);
router.route('/update-job-info/:_id').put(updateJobInfo);

// GET
router.route('/get-job-info').get(getJobInfo);
router.route('/get-employer-delete-info').get(getEmployerDelelteInfo);

// DELETE
router.route('/decline-job').delete(declineJob);

// High Risk command (Developers only)
router.route('/delete-all-job-info').delete(deleteAllJob);

module.exports = router;
