import { Component,OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {BlocFormComponent} from "../bloc-form/bloc-form.component";
import {FilterByBlocNamePipe} from "../pipe/filter-by-bloc-name.pipe";
import { Chambre } from 'src/app/Model/Chambre';
import { Foyer } from 'src/app/Model/Foyer';
import { Bloc } from 'src/app/Model/Bloc';
import { BlocService } from 'src/app/service/bloc/bloc.service';


@Component({
  selector: 'app-bloc-component',
  templateUrl: './bloc-component.component.html',
  styleUrls: ['./bloc-component.component.css'],
  providers:[FilterByBlocNamePipe]
})
export class BlocComponentComponent implements OnInit{

  blocs? : Bloc[];
  bloc? : Bloc;
  chambres? : Chambre[];
  searchTerm: string = '';
  idBlocToUpdate? : number;
  foyerToAdd? : Foyer;

//déclaration pagination 
p:number = 1 ; 
POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 3;
tableSizes: any = [5, 10, 15, 20];


  showDeleteToast?: boolean = false;
  showUpdateToast?: boolean = false;
  showInsertToast?: boolean = false;


  
  constructor(private blocService: BlocService,private dialog:MatDialog) {

  }
  ngOnInit() {
    this.blocService.getBlocs().forEach(data => {
      this.blocs = data;
    }).then(r => {console.log("r : ",r)});
    if(this.showDeleteToast || this.showInsertToast || this.showUpdateToast){
      this.hideToastAfterDelay();
    }
  }

  openBlocAddForm(): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '65%',
      data : {
        action : 'add',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("DATA TO ADD :",result);
        this.insertBloc(result);
        this.blocService.refreshPage();
      }
    });
  }

  openBlocUpdateForm(bloc: Bloc): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '56%',
      data : {
        action : 'update',
        bloc: bloc
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBloc(result);
      }
    })
  }
    openBlocShowForm(bloc: Bloc): void {
    const dialogRef = this.dialog.open(BlocFormComponent, {
      width: '50%',
      height: '65%',
      data : {
        action : 'show',
        bloc: bloc
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBloc(result);
      }
    })
  }


  deleteItem(idBloc:string): void {
    const confirmed = window.confirm('Are you sure you want to delete?');
    if (confirmed) {
      console.log(idBloc);
      this.blocService.deleteBloc(idBloc.toString());
      setTimeout(()=>{
        this.showDeleteToast = true;
        this.hideToastAfterDelay();
      },2000)

    }
    else
      {
        console.log('Deletion canceled');
      }
    }

  updateBloc(bloc:Bloc): void {
    this.blocService.updateBloc(bloc).subscribe(updatedBloc => {
      console.log("updated bloc with foyer :",updatedBloc);
      this.showUpdateToast = true;
      this.hideToastAfterDelay();
    });
  }

  insertBloc(dataToAdd:any): void {
    this.foyerToAdd = dataToAdd.foyers;
    this.blocService.addBloc(dataToAdd.bloc).subscribe(addedBloc => {
      addedBloc.foyers = this.foyerToAdd;
      this.blocService.updateBloc(addedBloc).subscribe(value => {
      });
    });
    this.showInsertToast = true;
    this.hideToastAfterDelay();
  }
  private hideToastAfterDelay(): void {
    setTimeout(() => {
      this.showDeleteToast = false;
      this.showUpdateToast = false;
      this.showInsertToast = false;
    }, 2000);
  }
      //Pagination 
      postList(): void {
        this.blocService. getBlocs().subscribe((response) => {
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
     

}
