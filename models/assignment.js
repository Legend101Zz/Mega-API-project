const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  title: { type: String, required: true },
  introVideo: { type: Object, required: false },

  sample: { type: Object, required: false },
  // to be updated
  unitId: { type: Schema.Types.ObjectId, ref: "Unit" },
  // to be updated
  submittedBy: { type: Schema.Types.ObjectId, ref: "User" },
  // to be updated
  status: {
    type: "String",
    enum: ["submitted", "not-submitted", "accepted", "rejected"],
  },
  // to be updated
  statuscode: { type: String, required: false },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
