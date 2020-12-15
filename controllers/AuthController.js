const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.sign_up = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Field Validation
  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }

  // User Exist Check
  const userData = await User.findOne({ email }); // email: email
  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User already exists!" }] });
  }

  // Encrypting Password
  const salt = await bcrypt.genSalt(10);
  const cryptedPassword = await bcrypt.hash(password, salt);

  // Saving to DB
  const user = new User({
    firstName, // => firstName: firstName  (ES6)
    lastName,
    email,
    password: cryptedPassword,
  });
  await user.save();
  // TODO: error handling for saving

  res.send("SignUp Successful");
};

exports.sign_in = async (req, res) => {
  const { email, password } = req.body;

  // Field Validation
  const validationErr = validationResult(req);
  if (validationErr.errors.length > 0) {
    return res.status(400).json({ errors: validationErr.array() });
  }

  // User Exist Check
  const userData = await User.findOne({ email }); // email: email
  if (!userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User doesn't exist!" }] });
  }

  // Password Compare
  const isPasswordMatch = await bcrypt.compare(password, userData.password);
  if (!isPasswordMatch) {
    return res
      .status(400)
      .json({ errors: [{ message: "Invalid credentials" }] });
  }

  // Authentication - JSON WEB TOKEN (JWT-token)
  jwt.sign(
    { userData },
    process.env.JWT_SECRET_KEY,
    { expiresIn: 3600 },
    (err, token) => {
      if (err) {
        return res.status(400).json({ errors: [{ message: "Unknown Error" }] });
      }
      res.status(202).json({ token });
    }
  );
};
