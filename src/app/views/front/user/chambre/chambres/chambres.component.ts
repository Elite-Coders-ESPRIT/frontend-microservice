import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PaginationService } from 'ngx-pagination';
import { ChambreService } from 'src/app/service/chambre/chambre.service';
import { Chambres } from 'src/app/Model/Chambres';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class chambresComponent implements OnInit {

  observables? : Observable<Chambres[]>;
  chambres? : Chambres[];
  chambreForm: FormGroup;
  private apiServer:String='http://localhost:8080/TpEtudeDeCas/chambre/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

}



title = 'Angular Search Using ng2-search-filter';
  searchText;
  chambre: Chambres[] = [];

 //déclaration pagination 
 p:number = 1 ; 
 POSTS: any;
 page: number = 1;
 count: number = 0;
 tableSize: number = 4;
 tableSizes: any = [5, 10, 15, 20];
postList(): void {
  this.serviceChambre.getAllChambress().subscribe((response) => {
    this.POSTS = response;
    console.log(this.POSTS);
  });
}

onTableDataChange(event: any) {
  this.page = event;
  this.postList();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.postList();

}
 
  


  constructor(private fb: FormBuilder, private serviceChambre: ChambreService, private _http:HttpClient,private router: Router,private dialog:MatDialog, private paginationService: PaginationService) {
    this.chambreForm = this.fb.group({
      idChambre: [null, Validators.required],
      numeroChambre: [null, Validators.required],
      typeChambre: [null, Validators.required],
      bloc: [null, Validators.required],
      // Add other form controls as needed
    });
  }
  ngOnInit(): void {
    this.getAllUniversite();
   this.getCountChambre();
  
  }
  //pour get liste de foyer
  getAllUniversite(){
    this.serviceChambre.getAllChambress().subscribe((data : Chambres[])=>{
      console.log("all data ",data);
    
      this.chambres = data;
      
      console.log( this.chambres);


    })
  
}
getCountChambre(){
this.serviceChambre.getcountChambres().subscribe((nb:number)=>{

})
}

deleteChambre(idChambre: number) {Swal.fire({
  title: 'Es-tu sûr?',
  text: 'Vous ne pourrez pas revenir en arrière !',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, supprimez-le !',
  cancelButtonText: 'Annuler' 
}).then((result) => {
  if (result.isConfirmed) {
  this.serviceChambre.deleteChambres(idChambre).subscribe(
    () => {Swal.fire({
      title: 'Supprimé!',
      text: 'Votre fichier a été supprimé.',
      icon: 'success'
    }).then(() => {
      console.log('Chambre deleted successfully.');
      this.chambres = this.chambres.filter(chambre => chambre.idChambre !== idChambre);
      window.location.reload();
    
    });
  });
}
});
}

SaveStorage(bloc){
  localStorage.setItem('blocs',JSON.stringify(bloc));
}

  
}





