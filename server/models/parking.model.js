const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/parking_db";

mongoose.connect(URI);

const parkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  license: {
    type: String,
    required: true,
  },
  vehicleType: { type: String, required: true },
  flag: { type: Boolean, default: true },

  arrivalTime: Date,
  departureTime: Date,
});

const totalCarSchema = new mongoose.Schema({
  totalSpace: Number,
  freeSpace: Number,
  bookedSpace: Number,
});

const ParkingList = mongoose.model("parkingList", parkingSchema);
const TotalCar = mongoose.model("garageDetails", totalCarSchema);

module.exports = { ParkingList, TotalCar };
