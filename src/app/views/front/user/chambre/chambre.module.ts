import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { chambresComponent } from './chambres/chambres.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    chambresComponent,

    
    
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule,MatDialogModule
  ]
})
export class ChambreModule { }
