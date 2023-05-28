import {Component, Input, OnInit} from '@angular/core';
import {TripService} from "../_services/tripService/trip.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {TripDto} from "../dto/trip.dto";
import {StorageService} from "../_services/storageService/storage.service";
import {UserDto} from "../dto/user.dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../_services/userService/user.service";

@Component({
  selector: 'trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  public trip: TripDto;
  public currentUser: UserDto;
  public userListOpen: boolean;
  public users: Array<UserDto>;
  public addUserToTripForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
              private storageService: StorageService,
              private route: ActivatedRoute,
              private tripService: TripService,
              private userService: UserService,
              private toasterService: ToastrService
  ) {
    const successMessage = sessionStorage.getItem("success");
    if (successMessage) {
      toasterService.success(successMessage);
      sessionStorage.removeItem("success");
    }
  }

  ngOnInit() {

    this.tripService.getTripForUser(
      Number(this.route.snapshot.paramMap.get('id'))
    ).subscribe(
      data => {
        this.trip = data;
      },
      error => {
        this.toasterService.error("Error on getting user's trip: " + error);
      }
    );

    this.currentUser = this.storageService.getUser();

    this.userListOpen = false;

    this.addUserToTripForm = this.fb.group({
        users: ['', Validators.required]
      }
    );
  }

  openUserList() {
    this.userService.getUsers()
      .subscribe(
        data => {
          this.users = data.filter(
            (user) => this.trip
              .usersDto
              .findIndex((existingUser) => existingUser.id === user.id) === -1
          );
          this.userListOpen = true;
        },
        error => {
          this.toasterService.error("Error on getting users: " + error);
        }
      );
  }

  removeUser(userId: number) {
    this.tripService.removeUser(this.trip.id, userId)
      .subscribe(
        () => {
          window.location.reload();
          sessionStorage.setItem("success", "User successfully removed!");
        },
        error => {
          this.toasterService.error("There was an error when removing user: " + error);
        }
      );
  }

  addUsers() {
    this.tripService.addUser(this.trip.id, this.addUserToTripForm.get('users')?.value as Array<number>)
      .subscribe(
        () => {
          window.location.reload();
          sessionStorage.setItem("success", "User successfully added!");
        },
        error => {
          this.toasterService.error("There was an error when adding user: " + error);
        }
      );
  }
}
