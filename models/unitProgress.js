const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const unitProgressSchema = new Schema({
  lessonsCompleted: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Lesson",
  },

  testTaken: { type: Schema.Types.ObjectId, required: false, ref: "Test" },

  assignmentsDone: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Assignment",
  },

  percentCompleted: { type: Number, required: false },
});

module.exports = mongoose.model("unitProgress", unitProgressSchema);
