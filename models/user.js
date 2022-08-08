const mongoose = require("mongoose");

// will create the full user model after auth is added (also need some discussion while creating it/

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    unitsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Unit",
        required: false,
      },
    ],
    phoneOtp: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
