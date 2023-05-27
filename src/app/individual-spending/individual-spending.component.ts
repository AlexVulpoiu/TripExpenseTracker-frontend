import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {TripDto} from "../dto/trip.dto";
import {TripService} from "../_services/tripService/trip.service";

@Component({
  selector: 'app-individual-spending',
  templateUrl: './individual-spending.component.html',
  styleUrls: ['./individual-spending.component.css']
})
export class IndividualSpendingComponent implements OnInit {

  public addIndividualSpendingForm: FormGroup = this.fb.group({});
  public trips: Array<TripDto> | null = null;

  constructor(private fb: FormBuilder, private tripService: TripService, private toasterService: ToastrService) {
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

    this.addIndividualSpendingForm = this.fb.group({
        trip: ['', Validators.required],
        amount: ['', [Validators.required, Validators.min(1)]]
      }
    );
  }

  addIndividualSpending() {
    const data = {
      amount: this.addIndividualSpendingForm.get('amount')?.value
    };
    const tripId = this.addIndividualSpendingForm.get('trip')?.value;
    this.tripService.addIndividualSpending(tripId, data)
      .subscribe(
        () => {
          window.location.href = "/spendings";
          sessionStorage.setItem("spendingAdded", "Individual spending added successfully!");
        },
        error => {
          this.toasterService.error("There was an error when adding spending: " + error);
        }
      );
  }
}
