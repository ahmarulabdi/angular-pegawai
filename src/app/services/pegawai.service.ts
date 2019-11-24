import { Injectable } from '@angular/core';
import {Pegawai} from './../models/Pegawai';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

type ArrayPegawaiResponse = HttpResponse<Pegawai[]>;

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
    return this.httpClient.get<Pegawai[]>(`${this.url}/data`, { observe: 'response'}).pipe(
      map((res: ArrayPegawaiResponse) => res.body)
    );
  }
  detail(id: number): Observable<Pegawai> {
    return this.httpClient.get<Pegawai>(`${this.url}/detail/${id}`);
  }



}
