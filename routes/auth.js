const express = require('express');
const {
  register,
  login,
  forgotpassword,
  resetpassword,
  getInfo,
} = require('../controllers/auth');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotpassword);
// resetpassword token
router.route('/resetpassword/:resetToken').put(resetpassword);
router.route('/test').get(getInfo);

module.exports = router;
