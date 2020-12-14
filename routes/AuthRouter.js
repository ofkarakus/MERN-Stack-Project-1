const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const { check } = require("express-validator");

// routes for "/api/auth"

/**
 * @route POST "/api/auth/signup"
 * @desc Register endpoint
 * @access Public
 */

router.post(
  "/signup",
  [
    check("email", "Please enter a valid email!").isEmail(),
    check(
      "password",
      "please enter a password with 6 and more chars."
    ).isLength({ min: 6 }),
  ],
  AuthController.sign_up
);

/**
 * @route POST "/api/auth/signin"
 * @desc Login endpoint
 * @access Private
 */

router.post("/signin", AuthController.sign_in);

module.exports = router;
