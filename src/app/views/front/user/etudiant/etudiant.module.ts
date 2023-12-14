import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiants/etudiants.component';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatPaginatorModule} from '@angular/material/paginator';

import { NgxPaginationModule } from 'ngx-pagination';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    EtudiantComponent,
 
    
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    PdfViewerModule,
    MatPaginatorModule, 
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    
  
  ]
})
export class EtudiantModule { }
