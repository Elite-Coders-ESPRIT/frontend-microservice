import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { chambresComponent } from './chambres/chambres.component';


const routes: Routes = [
  { path: '', component: chambresComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
