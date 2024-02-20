const models = require("../models/parking.query");

exports.getParkingInfo = async (req, res) => {
  try {
    const parkingInfo = await models.getParkingList();
    res.status(200).json(parkingInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.postCarInfo = async (req, res) => {
  try {
    const { name, license, vehicleType } = req.body;
    const postedInfo = await models.postOne({
      name,
      license,
      vehicleType,
    });
    res.status(200).json(postedInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateDepartureTime = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTime = await models.updateTimeById(id);
    res.status(201).json(updatedTime);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
