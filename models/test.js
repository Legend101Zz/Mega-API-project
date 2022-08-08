const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSchema = new Schema({
  title: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },

  content: { type: String, required: false },
});

module.exports = mongoose.model("Test", testSchema);
