export interface Parking {
  _id?: string;
  name: string;
  license: string;
  vehicleType: string;
  flag?: boolean;
  arrivalTime?: Date;
  departureTime?: Date;
}
