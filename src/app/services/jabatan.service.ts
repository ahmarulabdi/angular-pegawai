import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Jabatan } from '../models/Jabatan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


type ArrayJabatanResponse = HttpResponse<Jabatan[]>;
@Injectable({
  providedIn: 'root'
})
export class JabatanService {
  url = 'http://localhost/lumen/lumen-pegawai/public/jabatan';
  constructor(
    private http: HttpClient,
  ) { }

  data(): Observable<Jabatan[]> {
    return this.http.get<Jabatan[]>(`${this.url}/data`, { observe: 'response' }).pipe(
      map((res: ArrayJabatanResponse) => res.body)
    );
  }
}
