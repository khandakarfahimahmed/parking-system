const models = require("./parking.model");

const Parking = models.ParkingList;
const TotalCar = models.TotalCar;

exports.getParkingList = async () => {
  try {
    const parkingList = await Parking.find({});
    return parkingList;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting ParkingList from DB.");
  }
};

exports.postOne = async (info) => {
  try {
    const data = {
      name: info.name,
      license: info.license,
      vehicleType: info.vehicleType,
      flag: true,

      arrivalTime: new Date(),
      departureTime: 0,
    };
    const updatedParkingDetails = await TotalCar.findByIdAndUpdate(
      "65d4aa3e978d7c1df4e7845e",
      { $inc: { bookedSpace: 1, freeSpace: -1 } },
      { new: true }
    );
    const newParkingList = await Parking.create(data);
    return newParkingList, updatedParkingDetails;
  } catch (err) {
    console.log(err);
    throw new Error("Error adding new Car details to DB.");
  }
};

exports.updateTimeById = async (id) => {
  try {
    const updatedTime = await Parking.findByIdAndUpdate(
      id,
      { departureTime: new Date(), flag: false },
      { new: true }
    );
    return updatedTime;
  } catch (err) {
    console.log(err);
    throw new Error("Error updating departure time to DB.");
  }
};
