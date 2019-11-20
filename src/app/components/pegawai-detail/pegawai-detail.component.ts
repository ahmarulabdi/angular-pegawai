import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {PegawaiService} from 'src/app/services/pegawai.service';
import {Pegawai} from 'src/app/models/Pegawai';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pegawai-detail',
  templateUrl: './pegawai-detail.component.html',
  styleUrls: ['./pegawai-detail.component.css']
})
export class PegawaiDetailComponent implements OnInit {
  pegawai: Pegawai;
  id: number;

  constructor(
    protected pegawaiService: PegawaiService,
    protected route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getPegawai();
    this.id = 1;
  }
  getPegawai() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.pegawaiService.detail().subscribe(
      p => this.pegawai = p
    );
  }
}
