import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  parkingForm = new FormGroup({
    name: new FormControl(),
    license: new FormControl(),
    vehicleType: new FormControl(),
  });

  // parkingFrom = this.formBuilder.group({

  // })

  constructor() {}
  onSubmit(info: any) {
    console.log(info);
  }
}
