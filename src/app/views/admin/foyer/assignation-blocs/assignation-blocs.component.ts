import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { FoyerService } from 'src/app/service/foyer/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assignation-blocs',
  templateUrl: './assignation-blocs.component.html',
  styleUrls: ['./assignation-blocs.component.css']
})
export class AssignationBlocsComponent {
  blocs: Bloc[] = [{
    idBloc: 0,
    nomBloc: '', // Update the type of nomBloc to accept null
    capaciteBloc: 0
  }];

  NouvelleListeBlocs: Bloc[] = [];
  messageErreur:boolean = false;
  assignClicked = false; // Flag to track button click

  selectedBlocNames: string[] = [];
  idFoyer: number;
  capaciteDisponible:number;
  SelectedBlocs: string[]=[];
  filteredOptions: string[] = []; // Array to store filtered options
  capaciteErr: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private foyerService: FoyerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idFoyer = params['idFoyer'];
      this.capaciteDisponible=params['capaciteFoyer']-params['blocsDispo']

    });
  }

  onAssignClick() {
    this.assignClicked = true; // Set the flag to true on button click
  }

  filterOptions(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filteredOptions = this.selectedBlocNames.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onSelectionChange(selectedNames: any[]) {
    console.log(selectedNames);

    if (Array.isArray(selectedNames)) {
      this.SelectedBlocs = [...selectedNames];

      this.NouvelleListeBlocs = this.blocs.filter(bloc =>
        selectedNames.includes(bloc.nomBloc ?? '')
      );
      console.log("Selected Blocs: ", this.NouvelleListeBlocs);
    } else if (typeof selectedNames === 'object' && selectedNames !== null) {
      const anySelectedNames = selectedNames as any;
      if ('value' in anySelectedNames) {
        this.SelectedBlocs = [...anySelectedNames.value];

        this.NouvelleListeBlocs = this.blocs.filter(bloc =>
          anySelectedNames.value.includes(bloc.nomBloc ?? '')
        );
        console.log("Selected Blocs: ", this.NouvelleListeBlocs);
      } else {
        console.error('Invalid selection input:', selectedNames);
      }
    } else {
      console.error('Invalid selection input:', selectedNames);
    }
  }


  selectAllOptions() {
    this.SelectedBlocs = [...this.selectedBlocNames];
    this.NouvelleListeBlocs = [...this.blocs];
  }

  ResetOptions(){
      this.SelectedBlocs = [];
      this.NouvelleListeBlocs = [];
  }

}
