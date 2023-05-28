import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TripDto} from "../../dto/trip.dto";
import {StorageService} from "../storageService/storage.service";
import {MessageResponse} from "../../response/MessageResponse";

const TRIPS_API = "http://localhost:8080/trips";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  getTripsForUser() {
    return this.http.get<Array<TripDto>>(TRIPS_API, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token)
    });
  }

  getTripForUser(tripId: number) {
    return this.http.get<TripDto>(TRIPS_API + "/" + tripId, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token)
    });
  }

  addIndividualSpending(tripId: number, data: any) {
    return this.http.post<MessageResponse>(TRIPS_API + "/" + tripId + "/addIndividualSpending", data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token)
    });
  }

  addGroupSpending(tripId: number, data: any) {
    return this.http.post<MessageResponse>(TRIPS_API + "/" + tripId + "/addGroupSpending", data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token)
    });
  }

  addTrip(data: any) {
    return this.http.post<MessageResponse>(TRIPS_API + "/add", data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token)
    });
  }
}
