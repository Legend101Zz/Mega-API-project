const User = require("../models/user");

const { validationResult } = require("express-validator/check");

// const admin = require("firebase-admin");

// const credentials = require("../authentication-d6368-firebase-adminsdk-a3avc-129f0a485b.json");

exports.signUp = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const name = req.body.name;

  const phone = req.body.name;
};

// exports.check = async (req, res, next) => {
//   const userResponse = await admin.auth().createUser({
//     email: req.body.email,
//     password: req.body.password,
//     emailVerified: false,
//     disabled: false,
//   });
//   res.send(userResponse);
// };

exports.Message = (req, res, next) => {
  res.render("message.ejs");
};
