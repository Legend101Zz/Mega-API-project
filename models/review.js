const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    byId: { type: Schema.Types.ObjectId, required: false, ref: "User" },

    description: { type: String, required: true },

    courseId: { type: Schema.Types.ObjectId, required: false, ref: "Course" },

    unitId: { type: Schema.Types.ObjectId, required: false, ref: "Unit" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
