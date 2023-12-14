import { Component,OnInit ,ViewChild , AfterViewInit  } from '@angular/core';
import { etudiantService } from '../../../../service/etudiant/etudiant.service';
import { Etudiant } from './../../../../Model/Etudiant';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'; 
import { DetailEtudiantComponent } from '../detail/detail-etudiant/detail-etudiant.component';





@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantComponent implements OnInit  {
  title = 'Angular Search Using ng2-search-filter';
  searchText= "";
  etudiant: Etudiant[] = [];

p:number = 1 ; 
POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 4 ;
tableSizes: any = [5, 10, 15, 20];
constructor( private ServiceEtudiant:etudiantService,private dialog:MatDialog ) { }
openBlocShowForm(etudiant:Etudiant): void {
    const dialogRef = this.dialog.open(DetailEtudiantComponent, {
      width: '25%',
      height: '65%',
      data : {
        etudiant: etudiant
      }
    });
 
  }

postList(): void {
    this.ServiceEtudiant.getAllEtudiants().subscribe((response) => {
      this.POSTS = response;
      console.log(this.POSTS);
    });
  }


  ngOnInit(): void {
    console.log("all data ");
    
    this.getAllEtudiants();

  }
  getAllEtudiants(){
    console.log("ge all  ");
    this.ServiceEtudiant.getAllEtudiants().subscribe((data : any)=>{
      console.log("all data : ",data);
    
      this.etudiant = data;
      console.log(this.etudiant);

    })
  }
  deleteEtudiant(id:any): void {
      Swal.fire({
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
          this.ServiceEtudiant.deleteEtudiants(id).subscribe(() => {
            Swal.fire({
              title: 'Supprimé!',
              text: 'Votre fichier a été supprimé.',
              icon: 'success'
            }).then(() => {
              window.location.reload();
            });
          });
        }
      });
    }
     


        

        
  
  





}
