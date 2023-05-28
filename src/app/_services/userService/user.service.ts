import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "../storageService/storage.service";
import {UserDto} from "../../dto/user.dto";

const TRIPS_API = "http://localhost:8080/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  getUsers() {
    return this.http.get<Array<UserDto>>(TRIPS_API, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.storageService.getUser().token)
    });
  }
}
