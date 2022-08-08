const mongoose = require("mongoose");

// short lesson model has id , type,pre req, title, description

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },

  type: {
    type: "String",
    enum: ["video", "article", "assignment", "payment", "event"],
  },

  unitsId: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
    required: false,
  },

  preRequisiteId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "PreRequisite",
  },
});

module.exports = mongoose.model("Lesson", lessonSchema);
