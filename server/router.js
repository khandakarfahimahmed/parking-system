const express = require("express");
const router = express.Router();
const parkingController = require("./controllers/parking.controller");

router.get("/", parkingController.getParkingInfo);
router.post("/", parkingController.postCarInfo);
router.put("/:id", parkingController.updateDepartureTime);

module.exports = router;
