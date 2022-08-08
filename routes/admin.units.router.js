const express = require("express");

const adminController = require("../controllers/admin.controller");

const router = express.Router();

//post new unit

router.post("/courses/:id/units", adminController.PostnewUnit);

// get all units in a course

router.get("/courses/:id/units/new", adminController.getUnits);

//add a single unit

router.get("/courses/:id/units/newUnit", adminController.newUnit);

// editing unit
router.get("/courses/:id/units/:id/edit", adminController.editUnit);

//add a single unit
router.get("/courses/:id/units/:id", adminController.getAunit);

// editing unit
router.put("/courses/:id/units/:id", adminController.patchUnit);

//delete unit
router.delete("/courses/:id/units/:id", adminController.deleteUnit);

module.exports = router;
