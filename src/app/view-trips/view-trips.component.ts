import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { TripDto } from "../dto/trip.dto";
import { TripService } from "../_services/tripService/trip.service";

@Component({
  selector: 'app-view-trips',
  templateUrl: './view-trips.component.html',
  styleUrls: ['./view-trips.component.css']
})
export class ViewTripsComponent implements OnInit {
  public trips: Array<TripDto> | null = null;

  constructor(private tripService: TripService, private toasterService: ToastrService) {
    const message = sessionStorage.getItem("tripAdded");
    if (message !== null && message !== undefined) {
      toasterService.success(message);
      sessionStorage.removeItem("tripAdded");
    }
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
  }
}
