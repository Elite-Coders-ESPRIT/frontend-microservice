import { Component, OnInit } from '@angular/core';
import { Etudiant } from './../../../../Model/Etudiant';
import { etudiantService } from '../../../../service/etudiant/etudiant.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UniversiteService } from '../../../../service/universite/universite.service';
import { Universite } from 'src/app/Model/Universite';


@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
   
    //universite Selectionner

  etudiant: Etudiant = { 
    idEtudiant:0,
    nomEt:'',
    prenomEt:'',
    cin:0n,
    ecole:'',
    dateNaissance:undefined,
  }
  //listeUniversite

  
//pour verifier cin
verifierCin = false;

etudiantListe : Etudiant[]=[];

  constructor(private etudiantService: etudiantService ,  private router: Router ,private ServiceUniversite:UniversiteService) { }

  ngOnInit(): void {
    this.getAllEtudiants();
  }

  saveEtudiant() {
 
    this.etudiantService.createEmployee(this.etudiant).subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Etudiant ajouter avec succées',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['admin/etudiant']);
        },
        (error: HttpErrorResponse) => {
          console.error('Error adding etudiant:', error);
        }
      );
}

  ExistedCin(CinString: BigInt): boolean {
    const cinTAB: string[] = this.etudiantListe.map(etudiantL => etudiantL.cin.toString());
  
    for (let i = 0; i < cinTAB.length; i++) {
      if (CinString.toString() === cinTAB[i]) {
        return true;
      }
    }
    return false;
  }




  getAllEtudiants() {
  this.etudiantService.getAllEtudiants().subscribe((data:Etudiant[])=>{
this.etudiantListe=data;
  });
  }

}
