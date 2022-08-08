const mongoose = require("mongoose");
// for assignments
const Schema = mongoose.Schema;

const completionSchema = new Schema({
  hasCompleted: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Assignment",
  },

  message: { type: String, required: true },

  time: { type: String, required: false },
});

module.exports = mongoose.model("Completion", completionSchema);
