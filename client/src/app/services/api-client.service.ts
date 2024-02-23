import { Injectable } from '@angular/core';
import { Parking } from '../interfaces/parking';
import { HttpClient } from '@angular/common/http';
import { Garage } from '../interfaces/garage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getParkingDetails(): Observable<Parking[]> {
    return this.http.get<Parking[]>(this.url + '/parking');
  }
  getGarageDetails(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.url + '/garage'); //need to write method to get garage details in server
  }
  postParkingDetails(data: {
    name: string;
    license: string;
    vehicleType: string;
  }): Observable<Parking> {
    return this.http.post<Parking>(this.url + '/parking', data); // Return the observable
  }
}
