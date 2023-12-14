import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import { Bloc } from 'src/app/Model/Bloc';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private baseUrl = "http://localhost:8089/bloc"

  constructor(private http: HttpClient, private router: Router) {

  }

  getBlocs(): Observable<Bloc[]> {
    console.log(this.baseUrl + "/");
    this.http.get(this.baseUrl + "/").subscribe(value => console.log("Observable.subscribe returned : ", value));
    return this.http.get<Bloc[]>(this.baseUrl + "/");
  }


  refreshPage() {
    console.log(this.router.url);
    this.router.navigate(["/admin"]).then(() => {
      this.router.navigate(["/admin/bloc"]);
      console.log(this.router.url);
    });
  }

  deleteBloc(idBloc: string): void {
    this.http.delete(this.baseUrl + "/" + idBloc).subscribe(() => {
      this.refreshPage();
    });
  }


  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.baseUrl}/`, bloc);
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(this.baseUrl + '/', bloc);
  }

}
