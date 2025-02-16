import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {httpInterceptorProviders} from "./_helpers/http.interceptor";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { SpendingsComponent } from './spendings/spendings.component';
import {ToastrModule} from "ngx-toastr";
import { IndividualSpendingComponent } from './individual-spending/individual-spending.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { GroupSpendingComponent } from './group-spending/group-spending.component';
import {MultiSelectModule} from "primeng/multiselect";
import {AddTripComponent} from "./add-trip/add-trip.component";
import { HomeComponent } from './home/home.component';
import {TripDetailsComponent} from "./trip-details/trip-details.component";
import { ViewTripsComponent } from './view-trips/view-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SpendingsComponent,
    IndividualSpendingComponent,
    GroupSpendingComponent,
    AddTripComponent,
    HomeComponent,
    TripDetailsComponent,
    ViewTripsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MultiSelectModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
