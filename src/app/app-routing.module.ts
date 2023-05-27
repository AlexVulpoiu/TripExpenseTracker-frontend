import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SpendingsComponent} from "./spendings/spendings.component";
import {IndividualSpendingComponent} from "./individual-spending/individual-spending.component";
import {GroupSpendingComponent} from "./group-spending/group-spending.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
