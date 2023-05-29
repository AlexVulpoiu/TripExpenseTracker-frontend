import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TripService} from "../_services/tripService/trip.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  public addTripForm: FormGroup = this.fb.group({});
  @Input() public trip: number;

  constructor(private fb: FormBuilder, private tripService: TripService, private toasterService: ToastrService) {

  }

  ngOnInit() {
    this.addTripForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      }
    );
  }

  addTrip() {
    const data = {
      title: this.addTripForm.get('title')?.value,
      location: this.addTripForm.get('location')?.value,
      startDate: this.addTripForm.get('startDate')?.value,
      endDate: this.addTripForm.get('endDate')?.value
    };

    this.tripService.addTrip(data)
      .subscribe(
        () => {
          window.location.href = "/trips";
          sessionStorage.setItem("tripAdded", "Trip added successfully!");
        },
        error => {
          this.toasterService.error("There was an error when adding trip: " + error);
        }
      );
  }
}
