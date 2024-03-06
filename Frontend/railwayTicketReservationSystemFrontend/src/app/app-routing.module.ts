import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketDetails } from './bookTicket';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { AdminSearchTrainComponent } from './admin-search-train/admin-search-train.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { AuthGuard } from './authGuard/auth.guard';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterUserComponent },
  {
    path: 'updateUser',
    component: UpdateuserComponent,
    canActivate: [AuthGuard],
  },
  { path: 'bookings', component: BookingsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'adminLogin',
    component: AdminLoginComponent,
  },
  {
    path: 'searchTrain',
    component: SearchTrainComponent,
  },
  {
    path: 'bookTicket',
    component: BookTicketComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addTrain',
    component: AddTrainComponent,
  },
  {
    path: 'adminSearchTrain',
    component: AdminSearchTrainComponent,
  },
  {
    path: 'allBookings',
    component: AllBookingsComponent,
  },
  {
    path: 'ticketDetails',
    component: TicketDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
