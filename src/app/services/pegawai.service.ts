import { Injectable } from '@angular/core';
import { Pegawai } from './../models/Pegawai';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {

  url = 'http://localhost/lumen/lumen-pegawai/public/pegawai';

  constructor(private httpClient: HttpClient) { }

  data(): Observable<Pegawai[]> {
    return this.httpClient.get<Pegawai[]>(`${this.url}/data`);
  }
  detail(): Observable<Pegawai> {
    return this.httpClient.get<Pegawai>(`${this.url}/detail/1`);
  }

}
