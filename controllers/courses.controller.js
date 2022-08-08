const Course = require("../models/course");
const Unit = require("../models/units");
const User = require("../models/user");
const Forum = require("../models/forum");

const { validationResult } = require("express-validator/check");
const router = require("../routes/courses.router");
const units = require("../models/units");

exports.getPosts = (req, res, next) => {
  Forum.find()
    .then((forum) => {
      res.status(200).json({ message: "Forum Fetched", forum: forum });
    })
    .catch((err) => {
      if (!err.status) {
        err.status = 500;
      }
      console.log(err);
      next(err);
    });
};
exports.getCourses = (req, res, next) => {
  Course.find()
    .then((course) => {
      res.status(200).json({ message: "Course Fetched", course: course });
    })
    .catch((err) => {
      if (!err.status) {
        err.status = 500;
      }
      console.log(err);
      next(err);
    });
};

exports.getUnits = (req, res, next) => {
  Unit.find()
    .then((course) => {
      res.status(200).json({ message: "Units Fetched", course: course });
    })
    .catch((err) => {
      if (!err.status) {
        err.status = 500;
      }
      console.log(err);
      next(err);
    });
};

exports.getUser = (req, res, next) => {
  User.find()
    .then((user) => {
      res.status(200).json({ message: "User Data Fetched", user: user });
    })
    .catch((err) => {
      if (!err.status) {
        err.status = 500;
      }
      console.log(err);
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const forum = new Forum({
    title: title,
    description: description,

    creator: "Mrigesh",
  });
  forum
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully!",
        forum: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCourse = (req, res, next) => {
  const courseId = req.params.courseId;
  Course.findById(courseId)
    .then((course) => {
      if (!post) {
        const error = new Error("Could not find post");
        error.status = 404;
        throw error;
      }
      res.status(200).json({ message: "Course Fetched", course: Course });
    })
    .catch((err) => {
      if (!err.status) {
        err.status = 500;
      }
      console.log(err);
      next(err);
    });
};

exports.home = (req, res, next) => {
  Course.find()
    .select(
      "numLessons quote totalVideoLessons totalResources totalTests  totalArticles  totalLikes coursePrice  title -_id UserName numLessons  lessonsCompleted"
    )
    .populate("units")

    .then((home) => {
      console.log(home);
      res.status(200).json({ message: "Home Fetched", home: home });
    })
    .catch((err) => {
      if (!err.status) {
        err.status = 500;
      }
      console.log(err);
      next(err);
    });
};
