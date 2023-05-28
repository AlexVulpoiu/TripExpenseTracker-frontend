import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SpendingsComponent} from "./spendings/spendings.component";
import {IndividualSpendingComponent} from "./individual-spending/individual-spending.component";
import {GroupSpendingComponent} from "./group-spending/group-spending.component";
import {AddTripComponent} from "./add-trip/add-trip.component";
import {HomeComponent} from "./home/home.component";
import {TripDetailsComponent} from "./trip-details/trip-details.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'spendings',
    component: SpendingsComponent
  },
  {
    path: 'individual-spending',
    component: IndividualSpendingComponent
  },
  {
    path: 'group-spending',
    component: GroupSpendingComponent
  },
  {
    path: 'trips/add',
    component: AddTripComponent
  },
  {
    path: 'trips/:id',
    component: TripDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
