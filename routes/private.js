const express = require('express');

const { getPrivateData, userSaveJob, userDeleteJob } = require('../controllers/private');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/get-user-info').get(protect, getPrivateData);
router.route('/user-save-job').post(protect, userSaveJob);
router.route('/user-delete-job').delete(protect, userDeleteJob);

module.exports = router;
