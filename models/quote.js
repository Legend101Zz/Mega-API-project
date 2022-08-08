const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  title: { type: String, required: true },
  quote: { type: String, required: true },
  author: { type: String },
});

module.exports = mongoose.model("Quote", quoteSchema);
