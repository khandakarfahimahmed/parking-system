import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiClientService } from '../../services/api-client.service';
import { Parking } from '../../interfaces/parking';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  parkingList: Parking[] = [];
  parkingForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    license: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    vehicleType: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private api: ApiClientService) {}
  onSubmit() {
    console.log(this.parkingForm.value);
    this.postDetails();
    this.parkingForm.reset();
  }
  ngOnInit() {
    this.getDetails();
  }
  postDetails() {
    if (this.parkingForm.valid) {
      const { name, license, vehicleType } = this.parkingForm.value;

      const parkingData: Parking = {
        name: name || '',
        license: license || '',
        vehicleType: vehicleType || '',
      };

      this.api.postParkingDetails(parkingData).subscribe((res) => {
        console.log(res);
      });
    }
  }
  getDetails() {
    this.api.getParkingDetails().subscribe((res) => {
      this.parkingList = res;
      console.log(res);
    });
  }
}
