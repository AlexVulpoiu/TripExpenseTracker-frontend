import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TripDto} from "../dto/trip.dto";
import {TripService} from "../_services/tripService/trip.service";
import {ToastrService} from "ngx-toastr";
import {UserDto} from "../dto/user.dto";

@Component({
  selector: 'app-group-spending',
  templateUrl: './group-spending.component.html',
  styleUrls: ['./group-spending.component.css']
})
export class GroupSpendingComponent implements OnInit {

  public addGroupSpendingForm: FormGroup = this.fb.group({});
  @Input() public trip: number;
  public trips: Array<TripDto> | null = null;
  public tripUsers: Array<UserDto> = new Array<UserDto>();
  public dropdownSettings = {};

  constructor(private fb: FormBuilder, private tripService: TripService, private toasterService: ToastrService) {
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select all',
      unselectAllText: 'Unselect all',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  ngOnInit() {
    this.tripService.getTripsForUser()
      .subscribe(
        data => {
          this.trips = data;
        },
        error => {
          this.toasterService.error("Error on getting user's trips: " + error);
        }
      );

    this.addGroupSpendingForm = this.fb.group({
        trip: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(1)]],
        users: ['', Validators.required]
      }
    );
  }

  onTripChange(newTrip: number) {
    let data = new Array<UserDto>();
    if (this.trips) {
      for (let t of this.trips) {
        if (t.id.toString() === newTrip.toString()) {
          data = t.usersDto;
          break;
        }
      }
    } else {
      data = new Array<UserDto>();
    }
    this.tripUsers = data;
    this.addGroupSpendingForm.patchValue({
      users: ''
    });
  }

  addGroupSpending() {
    const data = {
      amount: this.addGroupSpendingForm.get('amount')?.value,
      users: this.addGroupSpendingForm.get('users')?.value
    };
    const tripId = this.addGroupSpendingForm.get('trip')?.value;
    this.tripService.addGroupSpending(tripId, data)
      .subscribe(
        () => {
          window.location.href = "/spendings";
          sessionStorage.setItem("spendingAdded", "Group spending added successfully!");
        },
        error => {
          this.toasterService.error("There was an error when adding spending: " + error);
        }
      );
  }
}
