import {Component, Input, OnInit} from '@angular/core';
import {TripService} from "../_services/tripService/trip.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {TripDto} from "../dto/trip.dto";

@Component({
  selector: 'trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  public trip: TripDto;

  constructor(private route: ActivatedRoute, private tripService: TripService, private toasterService: ToastrService) {

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
  }

  removeUser(userId: number) {
    console.log("Remove " + userId);
  }

  addUser(userId: number) {
    console.log("Add " + userId);
  }
}
