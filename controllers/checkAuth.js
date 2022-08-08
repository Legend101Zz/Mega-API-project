const User = require("../models/user");
const awsSns = require("../util/aws");

const {
  PHONE_NOT_FOUND_ERR,

  PHONE_ALREADY_EXISTS_ERR,
  USER_NOT_FOUND_ERR,
  INCORRECT_OTP_ERR,
  ACCESS_DENIED_ERR,
} = require("../config/error");

const { createJwtToken } = require("../util/token.util");

const { generateOTP, fast2sms } = require("../util/otp.util");

// --------------------- create new user ---------------------------------

exports.createNewUser = async (req, res, next) => {
  try {
    let { phone, message, subject } = req.body;

    console.log(phone, message, subject);

    // check duplicate phone Number
    const phoneExist = await User.findOne({ phone });

    // create new user
    const createUser = new User({
      phone,
    });

    // save user

    if (phoneExist) {
      res.status(201).json({
        type: "success",
        message: "OTP sended to your registered phone number",
        data: {
          userId: phoneExist._id,
        },
      });
      // generate otp
      const otp = generateOTP(6);
      // save otp to user collection
      phoneExist.phoneOtp = otp;
      await phoneExist.save();
      // send otp to phone number
      // await fast2sms(
      //   {
      //     message: ` Your OTP is ${otp} `,
      //     contactNumber: phoneExist.phone,
      //   },
      //   next
      // );

      await awsSns.aws(req, res);
    } else {
      const user = await createUser.save();
      res.status(200).json({
        type: "success",
        message: "Account created for new user OTP sended to mobile number",
        data: {
          userId: user._id,
        },
      });

      // generate otp
      const otp = generateOTP(6);
      // save otp to user collection
      user.phoneOtp = otp;
      await user.save();
      // send otp to phone number
      // await fast2sms(
      //   {
      //     message: ` Your OTP is ${otp} `,
      //     contactNumber: user.phone,
      //   },
      //   next
      // );
      await awsSns.aws(req, res);
    }
  } catch (error) {
    next(error);
  }
};

// ------------ login with phone otp ----------------------------------

const loginWithPhoneOtp = async (req, res, next) => {
  try {
    const { phone } = req.body;
    const user = await User.findOne({ phone });

    if (!user) {
      next({ status: 400, message: PHONE_NOT_FOUND_ERR });
      return;
    }

    res.status(201).json({
      type: "success",
      message: "OTP sended to your registered phone number",
      data: {
        userId: user._id,
      },
    });

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection
    user.phoneOtp = otp;
    user.isAccountVerified = true;
    await user.save();
    // send otp to phone number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phone,
      },
      next
    );
  } catch (error) {
    next(error);
  }
};

// ---------------------- verify phone otp -------------------------

exports.verifyPhoneOtp = async (req, res, next) => {
  try {
    const { otp, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      next({ status: 400, message: USER_NOT_FOUND_ERR });
      return;
    }

    if (user.phoneOtp !== otp) {
      next({ status: 400, message: INCORRECT_OTP_ERR });
      return;
    }
    const token = createJwtToken({ userId: user._id });

    user.phoneOtp = "";
    await user.save();

    res.status(201).json({
      type: "success",
      message: "OTP verified successfully",
      data: {
        token,
        userId: user._id,
      },
    });
  } catch (error) {
    next(error);
  }
};
