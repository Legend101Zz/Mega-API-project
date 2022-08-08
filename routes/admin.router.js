const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin.controller");

const router = express.Router();
//courses
router.get("/courses", adminController.getCourses);

router.get("/courses/new", adminController.newCourse);

router.post("/courses", adminController.PostnewCourse);

//courses editing
router.get("/courses/:id", adminController.getAcourse);

router.get("/courses/:id/edit", adminController.editCourse);

router.put("/courses/:id", adminController.patchCourse);

router.delete("/courses/:id", adminController.deleteCourse);

module.exports = router;
