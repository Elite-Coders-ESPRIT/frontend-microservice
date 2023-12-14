import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambresComponent } from './chambres/chambres.component';
import { AjouterChambreComponent } from './ajouter-chambre/ajouter-chambre.component';
import { FormsModule } from '@angular/forms';
import { ModifierChambreComponent } from './modifier-chambre/modifier-chambre.component';
import { ViewChambreComponent } from './view-chambre/view-chambre.component';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    ChambresComponent,
    AjouterChambreComponent,
    ModifierChambreComponent,
    ViewChambreComponent,
    
    
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule,MatDialogModule
  ]
})
export class ChambreModule { }
