const User = require("../models/User");

exports.sign_up = async (req, res) => {
  // TODO: Register func.
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password);

  // TODO: save the user to DB

  const user = new User({
    firstName, // => firstName: firstName  (ES6)
    lastName,
    email,
    password, // :crypted password
  });

  await user.save();
  // TODO: error handling for saving

  // TODO: validate the fields
  // TODO: check already registered
  // TODO: crypt password

  res.send("SignUp Successful");
};

exports.sign_in = (req, res) => {
  // TODO: Auth.
  // TODO: Signin func.
  res.send("SignIn Successful");
};
