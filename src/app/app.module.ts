import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewGadgetsComponent } from './gadgets/gadgets.component';
import { LoginService } from './login/login.service';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { UniversalDeviceDetectorService } from './universal-device-detector.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateTicketComponent,
    ProfileComponent,
    LogoutComponent,
    ViewGadgetsComponent,
    TicketsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
  ],
  
  
  providers: [LoginService,DeviceDetectorService],
  bootstrap: [AppComponent],
  // useClass: UniversalDeviceDetectorService
})
export class AppModule { }
