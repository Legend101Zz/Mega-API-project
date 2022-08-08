const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },

    creator: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Forum", forumSchema);
