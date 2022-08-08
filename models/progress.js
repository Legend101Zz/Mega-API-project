const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const progressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "User",
  },

  course: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Course",
  },

  unit: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Unit",
  },

  unitProgress: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "unitProgress",
  },
});

module.exports = mongoose.model("Progress", progressSchema);
