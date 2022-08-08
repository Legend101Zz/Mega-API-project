const express = require("express");

const { body } = require("express-validator/check");
const courseController = require("../controllers/courses.controller");

const router = express.Router();

//GET courses
router.get("/", courseController.getCourses);

//GET forums
router.get("/forum", courseController.getPosts);

//GET units
router.get("/units", courseController.getUnits);

//GET User
router.get("/user", courseController.getUser);

//GET home
router.get("/home", courseController.home);

//POST /course/courses
router.post(
  "/forums",

  courseController.createPost
);

router.get("/course/:courseId", courseController.getCourse);

module.exports = router;
