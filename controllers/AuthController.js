const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.sign_up = async (req, res) => {
  // TODO: Register func.
  const { firstName, lastName, email, password } = req.body;

  // TODO: validate the fields

  // TODO: check already registered (email)
  const userData = await User.findOne({ email });  // email: email
  if (userData) {
    return res.status(400).json({ errors: [{ message: "User already exists!" }] });
  }

  const salt = await bcrypt.genSalt(10);
  const cryptedPassword = await bcrypt.hash(password, salt);

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

exports.sign_in = (req, res) => {
  // TODO: Auth.
  // TODO: Signin func.
  res.send("SignIn Successful");
};
