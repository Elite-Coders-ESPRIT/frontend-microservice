import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Etudiant } from '../../Model/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class etudiantService {
  private apiServer: string = 'http://localhost:8089/Etudiant/';
  private baseURL: string = 'http://localhost:8089/Etudiant/';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this._http.get<Etudiant[]>('http://localhost:8089/Etudiant/');
  }


  deleteEtudiants(id:number){
    return this._http.delete<Etudiant[]>(this.apiServer +'deleteEtudiant/'+id, this.httpOptions);
    }
    createEmployee(etudiant: Etudiant) {
      return this._http.post<Etudiant>('http://localhost:8089/Etudiant/AddEtudiant', etudiant, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }
    
    

    updateEmployee(etudiant: Etudiant) {
      return this._http.put<Etudiant>(this.apiServer + 'updateEtudiant', etudiant, this.httpOptions);  }



    
getEmployeeById(idEtudiant: number): Observable<Etudiant>{
  return this._http.get<Etudiant>(`${this.baseURL}/${idEtudiant}`);
}






ModifierFoyer(etudiant: Etudiant){
  return this._http.put<Etudiant>(this.apiServer + 'updateEtudiant', etudiant, this.httpOptions);  }
}




