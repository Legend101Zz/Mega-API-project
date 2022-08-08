const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const preRequisiteSchema = new Schema({
  onLesson: { type: Schema.Types.ObjectId, ref: "Lesson", required: false },

  onUser: { type: Schema.Types.ObjectId, required: false, ref: "Unit" },

  message: { type: String, required: true },

  time: { type: String, required: false },

  hasPreReq: { type: Boolean, required: false },
});

module.exports = mongoose.model("PreRequisite", preRequisiteSchema);
