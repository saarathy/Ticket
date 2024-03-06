import { AuthGuard } from './authGuard/auth.guard';
import { RouterModule } from '@angular/router';
import { RegistrationServieService } from './registration-servie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { HeaderComponent } from './header/header.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AuthInterceptor } from './authGuard/auth.interceptor';
import { AddTrainComponent } from './add-train/add-train.component';
import { AdminSearchTrainComponent } from './admin-search-train/admin-search-train.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterUserComponent,
    LoginComponent,
    AdminLoginComponent,
    SearchTrainComponent,
    HeaderComponent,
    UpdateuserComponent,
    BookingsComponent,
    BookTicketComponent,
    AddTrainComponent,
    AdminSearchTrainComponent,
    AllBookingsComponent,
    TicketDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    RegistrationServieService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
