const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// short models are taken from the model itself as if short model is created then linking the two models and managing changes when a given info is to be updated will slow the process and the population of specific things from a model will give the same efficiency as a short model as in short model has to verify from main model first

const unitSchema = new Schema({
  title: {
    type: String,
    required: false,
  },

  isPaid: {
    type: Boolean,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },
  numLessons: {
    type: Number,
    required: false,
  },
});

const courseSchema = new Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },

  creatorName: { type: String, required: true },

  //to be Updated
  introVideo: { type: Object, required: false },

  creatorDes: { type: String, required: false },

  // to be updated
  creatorPhoto: { type: Object, required: false },

  coursePrice: { type: Number, required: true },

  avgRating: { type: Number, required: true },

  totalReview: { type: String, required: true },

  totalPurchases: { type: Number, required: true },

  totalLikes: { type: Number, required: true },
  lessonsCompleted: { type: Number, required: true },

  UnitName: { type: String, required: true },
  UserName: { type: String, required: true },

  unitSchema: [unitSchema],

  isPaid: {
    type: Boolean,
    required: false,
  },

  //from short unit model (red see what is to be fetched from short unit model)

  units: [
    {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
  ],

  // to be updated
  quote: { type: String, required: false },

  // to be updated
  totalVideoLessons: { type: Number, required: false },

  // to be updated
  totalResources: { type: Number, required: false },
  // to be updated
  totalTests: { type: Number, required: false },
  // to be updated
  totalArticles: { type: Number, required: false },

  // top reviews, latest reviews  to be fetched from review model / note a function to generate top reviews and latest ones to be added/

  Reviews: {
    reviewsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Unit",
        required: false,
      },
    ],
  },
});

module.exports = mongoose.model("Course", courseSchema);
