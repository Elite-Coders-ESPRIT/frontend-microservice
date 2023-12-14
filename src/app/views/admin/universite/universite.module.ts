import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite/universite.component';
import { FormsModule } from '@angular/forms';
import { AjouterUniversiteComponent } from './ajouter-universite/ajouter-universite.component';

import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    UniversiteComponent,
    AjouterUniversiteComponent,

    
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,


  ]
})
export class UniversiteModule { }
