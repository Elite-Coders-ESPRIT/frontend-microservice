import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloc } from 'src/app/Model/Bloc';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiServer: String = 'http://localhost:8089/foyer/';

  constructor(private _http: HttpClient) { }

  getAllFoyers(): Observable<Foyer[]> {
    return this._http.get<Foyer[]>(this.apiServer + 'getAllFoyers');
  }
  deleteFoyer(id: number) {
    return this._http.delete<Foyer[]>(this.apiServer + 'deleteFoyer/' + id);
  }

  AjouterFoyer(foyer: Foyer) {
    return this._http.post<Foyer>(this.apiServer + 'addFoyer', foyer);
  }

  ModifierFoyer(foyer: Foyer) {
    return this._http.put<Foyer>(this.apiServer + 'updateFoyer', foyer);
  }

}
