/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reunion } from '../models/reunion';
import { URL } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ReunionsService {

  constructor(private httpClient: HttpClient, public storage: Storage) { }

  getReunions(): Observable<Reunion[]> {
    

    return this.httpClient.get<Reunion[]>(`${URL}/reunions`);
  }

  getReunion(id: number): Promise<Reunion> {
    return this.httpClient.get<Reunion>(`{$URL}/reunions/${id}`).toPromise();
  }

  ajouterReunion(reunion: Reunion): Observable<Reunion> {
    

    return this.httpClient.post<Reunion>(`${URL}/reunions`, reunion);
  }

  miseajourReunion(reunion: Reunion): Observable<Reunion> {
    

    return this.httpClient.put<Reunion>(`${URL}/reunions/${reunion.id}`, reunion);
  }

  supprimerReunion(id: number): Observable<Reunion> {
   

    return this.httpClient.delete<Reunion>(`${URL}/reunions/${id}`);
  }

}