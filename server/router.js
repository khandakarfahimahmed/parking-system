const express = require("express");
const router = express.Router();
const parkingController = require("./controllers/parking.controller");

router.get("/parking", parkingController.getParkingInfo);
router.post("/parking", parkingController.postCarInfo);
router.put("/parking/:id", parkingController.updateDepartureTime);

module.exports = router;
