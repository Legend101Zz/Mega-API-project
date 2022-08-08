const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//note short unit model ( abstracted from unit model has name, id. total lessons, pre req, is paid, price, total videos, total articles , tags)

const unitSchema = new Schema({
  title: [
    {
      type: String,
      required: false,
    },
  ],

  isPaid: [
    {
      type: Boolean,
      required: false,
    },
  ],
  description: [
    {
      type: String,
      required: false,
    },
  ],

  tag: [{ type: String, required: false }],

  numLessons: {
    type: Number,
    required: false,
  },

  // to be updated
  price: [
    {
      type: Number,
      required: false,
    },
  ],
  // to be updated
  courseId: { type: Schema.Types.ObjectId, required: false, ref: "Course" },
  // to be updated
  lessonId: { type: Schema.Types.ObjectId, required: false, ref: "Lesson" },
  // to be updated
  preRequisiteId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "PreRequisite",
  },
  // to be updated
  creatorId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Creator",
  },
});

module.exports = mongoose.model("Unit", unitSchema);
