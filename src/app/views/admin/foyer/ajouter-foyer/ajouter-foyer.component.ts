import { Component,OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Universite } from 'src/app/Model/Universite';
import { Foyer } from 'src/app/Model/Foyer';
import { FoyerService } from 'src/app/service/foyer/foyer.service';


  @Component({
    selector: 'app-ajouter-foyer',
    templateUrl: './ajouter-foyer.component.html',
    styleUrls: ['./ajouter-foyer.component.css']

  })
  export class AjouterFoyerComponent implements OnInit   {
[x: string]: any;



InvalideMessage:boolean = false;

    selectedUniversite: Universite = null; // Declare selectedUniversite property

    Universites: Universite[] = [];

    Foyers: Foyer ={
      idFoyer:0,
      nomFoyer:'',
      capaciteFoyer:0,
      universite : this.selectedUniversite,
      blocs: []
     };

    constructor(private ServiceFoyer:FoyerService,  private router: Router){}



    ngOnInit(): void {

  }


    formIsValid(): boolean {
      return (
        this.Foyers.nomFoyer &&
        /^[A-Za-z]+$/.test(this.Foyers.nomFoyer) &&
        this.Foyers.nomFoyer.length <= 20 &&
        this.Foyers.capaciteFoyer >= 1 &&
        this.Foyers.capaciteFoyer <= 10
      );
    }


    ajouterFoyer() {
      if (this.formIsValid()) {

        this.Foyers.universite = this.selectedUniversite;
        this.ServiceFoyer.AjouterFoyer(this.Foyers).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Foyer ajouter avec succées',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['admin/foyer']);
          },
          (error: HttpErrorResponse) => {
            console.error('Error adding foyer:', error);
          }
        );
      } else {
        this.InvalideMessage = true;
        console.log('Form is invalid. Cannot submit.');
      }
    }




  }
