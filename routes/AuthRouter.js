const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/AuthController')

// routes for "/api/auth"

/**
  * @route POST "/api/auth/signup"
  * @desc Register endpoint
  * @access Public
*/

router.post("/signup", AuthController.sign_up)

/**
  * @route POST "/api/auth/signin"
  * @desc Login endpoint
  * @access Private
*/

router.post("/signin", AuthController.sign_in)

module.exports = router;
