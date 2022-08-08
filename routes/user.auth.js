const express = require("express");

const authController = require("../controllers/auth.controller");

const checkAuth = require("../controllers/checkAuth");

const checkAdmin = require("../controllers/checkAdmin");

const User = require("../models/user");

const { body } = require("express-validator/check");

// const admin = require("firebase-admin");

// const credentials = require("../authentication-d6368-firebase-adminsdk-a3avc-129f0a485b.json");
const router = express.Router();

// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
// });

router.get("/message", authController.Message);

// router.post("/signUp", authController.check);

// router.post(
//   "/register",
//   [
//     body("phone")
//       .isNumeric()
//       .withMessage("Please enter a valid Number")
//       .custom((value, { req }) => {
//         return User.findOne({ phone: value }).then((userDoc) => {
//           if (userDoc) {
//             return Promise.reject("Number is already registered");
//           }
//         });
//       }),
//   ],
//   authController.registerUser
// );

router.post("/login", checkAuth.createNewUser);

// router.post("/login_with_phone", checkAuth.loginWithPhoneOtp);

router.post("/verify", checkAuth.verifyPhoneOtp);

module.exports = router;
