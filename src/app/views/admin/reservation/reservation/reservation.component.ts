import { Component, ElementRef, ViewChild } from '@angular/core';
import { Reservation } from '../../../../Model/Reservation';
import { ReservationService } from 'src/app/service/reservation/reservation.service';

import { MatDialog } from '@angular/material/dialog';
import {Bloc} from "../../../../Model/Bloc";
import {BlocFormComponent} from "../../bloc/bloc-form/bloc-form.component";
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  reservations: Reservation[] = [];
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  constructor( private serviceReservation:ReservationService,private dialog:MatDialog) { }
  message: string ="";
  msgSMS : string ="**** Campus Living Spaces **** - Resulat de votre demande de reservation : -----";
  //déclaration pagination
  p:number = 1 ;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  ////
  ngOnInit(): void {
    console.log("Get List of Reservation ");
    this.getAllReservations();
  }

  getAllReservations(){
      this.serviceReservation.getAllReservations().subscribe((data : Reservation[])=>{
      this.reservations = data;
      console.log("Object reservation ",this.reservations);
    })
  }
  delete(id:any){
    this.serviceReservation.delete(id).subscribe(() => {
      window.location.reload();
    });
  }
  nonValide(id:any){
  if (confirm("Voulez vous vraiment non valider  ce reservation ?")) {
    this.serviceReservation.nonValide(id).subscribe(() => {
      alert('Modifier effectuée avec succés');
      window.location.reload();
      });
  }}

  ouiValide(id:any){
    if (confirm("Voulez vous vraiment  valider  ce reservation ?")) {
      this.serviceReservation.ouiValide(id).subscribe(() => {
        alert('Modifier effectuée avec succés');
        window.location.reload();
        });
  }}





  //Pagination




}
