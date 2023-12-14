import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ReservationComponent,
    ShowReservationComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
  
    HttpClientModule
  ],
})
export class ReservationModule { }
