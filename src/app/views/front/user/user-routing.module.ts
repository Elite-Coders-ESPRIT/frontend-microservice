import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './Reservation/reservations/reservations.component';
import { AjouterReservationComponent } from './Reservation/ajouter-reservation/ajouter-reservation.component';
import { EtudiantComponent } from './etudiant/etudiants/etudiants.component';
import { chambresComponent } from './chambre/chambres/chambres.component';

const routes: Routes = [ 

  { path: 'chambre', component: chambresComponent },

  { path: 'etudiant', component: EtudiantComponent },
      { path: 'reservations', component: ReservationsComponent },
      { path: 'ajouterReservation', component: AjouterReservationComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }